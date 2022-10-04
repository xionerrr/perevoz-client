import styled from 'styled-components'

export const FormInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 72px 0;

  background-color: rgba(0, 0, 0, 2.5%);
  box-shadow: 0 9px 6px 0 rgb(0 0 0 / 50%);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 90%;
  max-width: 525px;
  padding: 24px;

  background-color: #fff;
  border: 1px solid #000;
`

export const FormTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormMainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`

export const FormTitle = styled.h3`
  margin-bottom: 16px;

  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`

export const FormSubTitle = styled.p`
  padding: 0 12px;

  font-size: 16px;
  line-height: 24px;
  text-align: center;

  background-color: rgba(0, 0, 0, 2.5%);
  border-radius: 8px;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 18px;

  font-size: 15px;
  color: #222;

  border: 1px solid #999;
  border-radius: 16px;

  transition: border 0.3s ease;

  ::placeholder {
    color: #999;
  }

  &:focus {
    border: 1px solid #149708;
  }
`

export const FormSubmit = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const FormButton = styled.button`
  cursor: pointer;

  padding: 12px 18px;

  font-size: 16px;
  color: #fff;

  background-color: #149708;
  border: 0;
  border-radius: 4px;
`

export const FormSubmitLabel = styled.div`
  font-size: 13px;
  text-align: center;
`
