import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { faqListItems, I_FaqListItems } from './data'
import * as S from './styles'

export const FaqList = () => {
  const [data, setData] = useState<I_FaqListItems[]>(faqListItems)

  const location = useLocation()

  const handleToggleItem = (index: number) => () => {
    const updatedData = data.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          opened: !item.opened,
        }
      }
      return item
    })
    setData(updatedData)
  }

  return (
    <S.FaqList $locationPathname={location.pathname}>
      <S.FaqListInner>
        <S.FaqListItems>
          {data.map((item, index) => {
            return (
              <S.FaqListItem key={index}>
                <S.FaqListItemControl onClick={handleToggleItem(index)} $isOpened={item.opened}>
                  <S.FaqListItemLabel>{item.label}</S.FaqListItemLabel>
                  <S.FaqListItemIcon>
                    {item.opened ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </S.FaqListItemIcon>
                </S.FaqListItemControl>
                <S.FaqListItemContent $isOpened={item.opened}>
                  <S.FaqListItemContentInner>
                    <S.FaqListItemContentDescription>
                      {item.description}
                    </S.FaqListItemContentDescription>
                  </S.FaqListItemContentInner>
                </S.FaqListItemContent>
              </S.FaqListItem>
            )
          })}
        </S.FaqListItems>
      </S.FaqListInner>
      <S.FaqQuestion>?</S.FaqQuestion>
    </S.FaqList>
  )
}
