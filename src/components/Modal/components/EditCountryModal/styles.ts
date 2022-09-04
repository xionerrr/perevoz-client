import styled from 'styled-components'

export const EditCountryModal = styled.div`
  z-index: 1000;

  overflow: overlay;
  display: flex;
  justify-content: center;

  width: 90%;
  max-width: 625px;
  height: fit-content;
  min-height: 60%;
  max-height: fit-content;

  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 0 0 2px #149708;

  @media (max-width: 625px) {
    overflow: overlay;

    width: 100%;
    height: 100%;
    min-height: 100%;

    border-radius: 0;
  }
`
export const EditCountryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`

export const EditCountryModalTitle = styled.div`
  font-size: 31px;
  font-weight: 700;
  color: #149708;
`

export const EditCountryModalClose = styled.button`
  cursor: pointer;

  display: flex;

  color: #000;

  background-color: transparent;
  border: 0;

  transition: all 0.3s;

  &:hover {
    color: #149708;
  }
`

export const EditCountryModalInner = styled.div`
  position: relative;

  overflow: auto;

  width: 100%;
  padding: 32px;
`

export const EditCountryForm = styled.form`
  width: 100%;
  min-height: 325px;
  max-height: auto;
`

export const EditCountry = styled.div`
  position: relative;

  width: 100%;

  svg {
    position: absolute;
    right: 0;
    bottom: 50%;
    transform: translate(-50%, 50%);
  }
`

export const EditCountryLabel = styled.label`
  pointer-events: none;

  position: absolute;
  top: 10px;
  left: 16px;

  margin-left: -2px;

  font-size: 12px;
  font-weight: 500;
  color: #5f5573;
`

export const EditCountryOptionNotSelected = styled.option`
  color: #a8a8a8;
`

export const EditCountrySelect = styled.select`
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

export const EditCountryOption = styled.option``

export const EditCountryError = styled.div`
  position: absolute;
  right: 24px;
  bottom: 50%;
  transform: translate(-50%, 50%);

  color: #149708;
`

export const EditCountryPhoto = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  margin: 12px 0;
`

export const EditCountryInput = styled.input``

export const EditCountrySubmitPhoto = styled.button`
  cursor: pointer;

  min-width: 197px;
  margin: 24px 0;
  padding: 12px;

  font-size: 12px;
  line-height: 1.43;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  background-color: #222;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 9px 13px 0 rgb(0 0 0 / 34%);

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 625px) {
    width: 100%;
    padding: 12px 14px;

    font-size: 12px;
  }
`

export const PhotoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Image = styled.img`
  width: 100%;
  min-width: 64px;
  max-width: 325px;
  height: 100%;
  min-height: 64px;
  max-height: 325px;
`

export const Label = styled.p``

export const FormSubmit = styled.div``

export const FormButtonSubmit = styled.button`
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
