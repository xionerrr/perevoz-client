import styled from 'styled-components'

export const PackageCalculator = styled.div`
  width: 100%;
  height: 100%;
`

export const PackageCalculatorInner = styled.div``

export const PackageCalculatorTitle = styled.h3`
  position: relative;

  margin-bottom: 50px;

  font-size: 30px;
  color: #149708;
  text-transform: uppercase;

  &::after {
    content: '';

    position: absolute;
    bottom: -12px;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: #149708;
  }
`

export const PackageCalculatorContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 64px;

  @media (max-width: 625px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const PackageCalculatorItem = styled.div`
  width: 100%;
`

export const PackageCalculatorItemLabel = styled.p`
  margin-bottom: 16px;

  font-size: 18px;
  font-weight: 600;
`

export const PackageCalculatorItemInput = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 13px;

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

export const PackageCalculatorCharacter = styled.div`
  margin-top: 36px;

  font-size: 28px;
  font-weight: 600;

  @media (max-width: 625px) {
    display: none;
  }
`

export const PackageCalculatorSubmitBox = styled.div`
  text-align: center;
`

export const PackageCalculatorSubmit = styled.button`
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

export const PackageCalculatorPhones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  width: 100%;
  max-width: 968px;
`

export const PackageCalculatorPhoneLink = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  color: #000;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`
