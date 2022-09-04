import styled from 'styled-components'

import { ROUTES } from 'utils/constants/routes'

export const Booking = styled.div`
  width: 100%;
  margin: 0 auto;
`

interface I_BookingLoaderProps {
  location: string
}

export const BookingLoader = styled.div<I_BookingLoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 325px;
  max-width: 525px;
  height: 100%;
  min-height: 325px;
  max-height: auto;
  padding: 48px;

  background-color: ${({ location }) => (location === ROUTES.book ? 'transparent' : '#f5f5f5')};
  border-radius: ${({ location }) => (location === ROUTES.book ? ' 8px' : '0px')};
  box-shadow: ${({ location }) => (location === ROUTES.book ? ' 0 0 0 2px #149708' : 'none')};

  @media (max-width: 625px) {
    padding: 24px;
  }
`

interface I_BookingFormProps {
  location: string
}

export const BookingForm = styled.form<I_BookingFormProps>`
  width: 100%;
  min-width: 325px;
  max-width: 525px;
  height: 100%;
  min-height: 325px;
  max-height: auto;
  padding: 48px;

  background-color: ${({ location }) => (location === ROUTES.book ? 'transparent' : '#f5f5f5')};
  border-radius: ${({ location }) => (location === ROUTES.book ? ' 8px' : '0px')};
  box-shadow: ${({ location }) => (location === ROUTES.book ? ' 0 0 0 2px #149708' : 'none')};

  @media (max-width: 625px) {
    padding: 24px;
  }
`

export const BookingFormTitle = styled.div`
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 625px) {
    font-size: 28px;
  }
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
  gap: 24px;

  width: 100%;

  @media (max-width: 625px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

export const BookingFormName = styled.div`
  position: relative;

  width: 100%;
`

export const BookingFormTel = styled.div`
  position: relative;

  width: 100%;
`

export const BookingFromUserLabel = styled.label`
  pointer-events: none;

  position: absolute;
  top: 10px;
  left: 16px;

  margin-left: -2px;

  font-size: 12px;
  font-weight: 500;
  color: #5f5573;
`

export const BookingFormInput = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 24px 13px 9px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.38;
  color: #000;

  border: 1px solid #c2c2c2;
  border-radius: 2px;

  &[type='text']:focus {
    box-shadow: 0 -2px 0 0 #149708 inset;
  }
`
export const BookingFormNameError = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translate(-50%, 50%);

  color: #149708;
`

export const BookingFormTelError = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translate(-50%, 50%);

  color: #149708;
`

export const BookingFormDepartureError = styled.div`
  position: absolute;
  right: 24px;
  bottom: 50%;
  transform: translate(-50%, 50%);

  color: #149708;
`

export const BookingFormSubmit = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 625px) {
    flex-direction: column;
  }
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

  @media (max-width: 625px) {
    width: 100%;
    padding: 12px 14px;

    font-size: 12px;
  }
`

export const BookingFromUserDepartureCity = styled.div`
  position: relative;

  width: 100%;

  svg {
    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translate(-50%, 50%);
  }
`

export const BookingFromUserArrivalCity = styled.div`
  position: relative;

  width: 100%;

  svg {
    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translate(-50%, 50%);
  }
`

export const BookingFromUserCitySelect = styled.select`
  cursor: pointer;

  width: 100%;
  min-width: 66px;
  height: 3.375rem;
  padding: 26px 0.8125rem 7px;

  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.38;
  color: #000;

  background: #fff;
  background-repeat: no-repeat;
  background-position: calc(100% - 7px) 28px;
  background-size: 16px;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  outline: none;
  box-shadow: none;

  /* stylelint-disable property-no-vendor-prefix */
  -moz-appearance: none;
  -webkit-appearance: none;

  & option[value='noValue'] {
    display: none;
  }
`

export const BookingFromUserCityOption = styled.option``

export const BookingFromUserCityOptionNotSelected = styled.option`
  color: #a8a8a8;
`

export const BookingFormUserDetails = styled.div`
  position: relative;

  .react-datepicker-wrapper > * {
    position: static;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #149708;
  }

  input {
    width: 100%;
    height: 3.375rem;
    padding: 24px 13px 9px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.38;
    color: #000;

    border: 1px solid #c2c2c2;
    border-radius: 2px;

    &[type='text']:focus {
      box-shadow: 0 -2px 0 0 #149708 inset;
    }
  }
`

export const BookingFormUserPassengersCount = styled.div`
  position: relative;

  width: 100%;

  svg {
    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translate(-50%, 50%);
  }
`
