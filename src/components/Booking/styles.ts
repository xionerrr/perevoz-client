import styled from 'styled-components'

export const Booking = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const BookingForm = styled.form`
  padding: 30px 60px;

  background-color: #f5f5f5;
`

export const BookingFormTitle = styled.div`
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: 700;
  text-align: center;
`

export const BookingFormInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const BookingFormUserInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;

  width: 100%;
`

export const BookingFormUserDestination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
`

export const BookingFormName = styled.div`
  width: 100%;
`

export const BookingFormTel = styled.div`
  width: 100%;
`

export const BookingFormInput = styled.input`
  width: 100%;
`

export const BookingFormLabel = styled.label``

export const BookingFormSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const BookingFormSubmitButton = styled.button`
  cursor: pointer;

  min-width: 197px;
  padding: 16px 18px;

  font-size: 14px;
  line-height: 1.43;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  background-color: #149708;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 9px 13px 0 rgb(0 0 0 / 34%);

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #5f5573;
  }
`

export const BookingFromUserDepartureCity = styled.div`
  width: 100%;
`

export const BookingFromUserArrivalCity = styled.div`
  width: 100%;
`

export const BookingFromUserCitySelect = styled.select`
  width: 100%;
`

export const BookingFromUserCityOption = styled.option``

export const BookingFormUserDetails = styled.div``
