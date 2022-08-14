import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { ROUTES } from 'utils/constants/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

type FormData = {
  username: string
  password: string
}

export const SignIn = () => {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormData>()

  // useEffect(() => {
  //   if (userLoginData && userLoginData.payload && userLoginSuccess) {
  //     LocalStorage.setAuthToken(userLoginData.payload.token)
  //     navigate(ROUTES.admin, { replace: true })
  //   }
  // }, [userLoginData, userLoginSuccess])

  return (
    <S.SignIn>
      <S.UpperLabelBox>
        <S.MainLabel>Admin Panel</S.MainLabel>
      </S.UpperLabelBox>
      <S.Form autoComplete='off'>
        <S.InputBox>
          <S.UserInput
            type='text'
            placeholder='Username'
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
            loginError={Boolean(errors.username)}
            {...register('username', { required: true })}
          />
          {errors.username && <S.InputErrorText>Please enter a valid user</S.InputErrorText>}
        </S.InputBox>
        <S.InputBox>
          <S.PassInput
            type='password'
            placeholder='Password'
            autoComplete='off'
            passError={Boolean(errors.password)}
            {...register('password', { required: true, minLength: 3 })}
          />
          {errors.password && <S.InputErrorText>Please enter a valid password</S.InputErrorText>}
        </S.InputBox>
        <S.LoginButton
          // disabled={userLoginLoading}
          // userLoginLoading={userLoginLoading}
          type='submit'
        >
          Sign In
        </S.LoginButton>
      </S.Form>
    </S.SignIn>
  )
}
