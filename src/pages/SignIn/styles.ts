import styled from 'styled-components'

export const UpperLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

export const MainLabel = styled.h2`
  opacity: 0.875;
`

export const Redirect = styled.span`
  display: flex;
  gap: 6px;

  font-size: 14px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;

  width: 100%;

  input,
  button {
    font-family: GTWalsheimPro, sans-serif;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
`

interface I_UserInputProps {
  loginError: boolean
}

export const UserInput = styled.input<I_UserInputProps>`
  width: 100%;
  padding: 9px 16px;

  font-size: 13px;
  font-weight: 500;

  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  outline: 0;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }

  &:focus {
    outline-width: 0;
    box-shadow: inset 0 0 0 1px ${({ loginError }) => (loginError ? '#f36' : '#149708')};
  }
`

interface I_PassInputProps {
  passError: boolean
}

export const PassInput = styled.input<I_PassInputProps>`
  width: 100%;
  padding: 9px 16px;

  font-size: 13px;
  font-weight: 500;

  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  outline: 0;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }

  &:focus {
    outline-width: 0;
    box-shadow: inset 0 0 0 1px ${({ passError }) => (passError ? '#f36' : '#149708')};
  }
`

export const InputErrorText = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #f36;
`

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  font: inherit;
  vertical-align: baseline;

  border: 0;
`

interface I_LoginButton {
  userLoginLoading: boolean
}

export const LoginButton = styled.button<I_LoginButton>`
  cursor: pointer;

  width: 100%;
  padding: 9px 16px;

  font-weight: 500;
  color: #fff;

  background-color: ${({ userLoginLoading }) => (userLoginLoading ? '#999' : '#000')};
  filter: brightness(1);
  border: none;
  border-radius: 10px;
  outline: 0;
`
