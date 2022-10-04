import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'
import { useForm } from 'react-hook-form'

import { FormData } from './models'
import * as S from './styles'

import { callAPI } from 'services/call'
import { regExps } from 'utils/constants/regExp'

export const Form = () => {
  const [orderCall, { isSuccess: orderCallSuccess }] = callAPI.useOrderCallMutation()

  const { register, getValues, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
    },
  })

  const Submit = () => {
    orderCall({
      name: getValues().name,
      phoneNumber: getValues().phone,
    })
  }

  return (
    <S.FormInner>
      <S.Form onSubmit={handleSubmit(Submit)}>
        <S.FormTopSection>
          <S.FormTitle>Хочете замовити індивідуальний трансфер?</S.FormTitle>
          <S.FormSubTitle>
            Залиште заявку у формі нижче і наш менеджер зв'яжеться з вами найближчим часом
          </S.FormSubTitle>
        </S.FormTopSection>
        <S.FormMainSection>
          <S.FormInput
            type='text'
            autoComplete='off'
            placeholder={`Ваше ім'я*`}
            {...register('name', { required: true, maxLength: 40 })}
          />
          <S.FormInput
            type='text'
            autoComplete='off'
            placeholder='Ваш телефон ( з Viber )*'
            {...register('phone', {
              required: true,
              minLength: 10,
              maxLength: 16,
              pattern: {
                value: regExps.tel,
                message: 'Please enter a number',
              },
            })}
          />
        </S.FormMainSection>
        <S.FormSubmit>
          <S.FormButton type='submit'>Відправити</S.FormButton>
          <S.FormSubmitLabel>* поля із зірочкою обов'язкові до заповнення</S.FormSubmitLabel>
        </S.FormSubmit>
      </S.Form>
    </S.FormInner>
  )
}
