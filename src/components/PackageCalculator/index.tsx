import CallIcon from '@mui/icons-material/Call'
import { ChangeEvent, useState } from 'react'

import * as S from './styles'

export const PackageCalculator = () => {
  const [weight, setWeight] = useState<string>('')
  const [isNumbersVisible, setIsNumberVisible] = useState<boolean>(false)

  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value)
  }

  return (
    <S.PackageCalculator>
      <S.PackageCalculatorInner>
        <S.PackageCalculatorTitle>Калькулятор вартості</S.PackageCalculatorTitle>
        <S.PackageCalculatorContainer>
          <S.PackageCalculatorItem>
            <S.PackageCalculatorItemLabel>Вага</S.PackageCalculatorItemLabel>
            <S.PackageCalculatorItemInput
              type='number'
              value={weight}
              onChange={handleChangeWeight}
              placeholder='Вага посилки'
            />
          </S.PackageCalculatorItem>
          <S.PackageCalculatorCharacter>*</S.PackageCalculatorCharacter>
          <S.PackageCalculatorItem>
            <S.PackageCalculatorItemLabel>Ціна, за 1 кг</S.PackageCalculatorItemLabel>
            <S.PackageCalculatorItemInput type='number' value='2.5' disabled />
          </S.PackageCalculatorItem>
          <S.PackageCalculatorCharacter>=</S.PackageCalculatorCharacter>
          <S.PackageCalculatorItem>
            <S.PackageCalculatorItemLabel>Сума, €</S.PackageCalculatorItemLabel>
            <S.PackageCalculatorItemInput
              type='number'
              value={+weight < 0 ? 0 : +weight * 2.5}
              placeholder='Вартість посилки'
              disabled
            />
          </S.PackageCalculatorItem>
        </S.PackageCalculatorContainer>
        <S.PackageCalculatorPhones>
          <S.PackageCalculatorPhoneLink href={'tel:+38-066-658-49-38'}>
            <CallIcon fontSize='small' />
            +38-066-658-49-38 (Vodafone)
          </S.PackageCalculatorPhoneLink>
          <S.PackageCalculatorPhoneLink href={'tel:+38-097-826-35-33'}>
            <CallIcon fontSize='small' />
            +38-097-826-35-33 (Київстар)
          </S.PackageCalculatorPhoneLink>
        </S.PackageCalculatorPhones>
      </S.PackageCalculatorInner>
    </S.PackageCalculator>
  )
}
