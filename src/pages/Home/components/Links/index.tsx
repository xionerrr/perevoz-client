import { useMediaQuery } from '@mui/material'

import { linksData } from './data'
import * as S from './styles'

import { E_BreakPoints } from 'utils/constants/breakpoints'

export const Links = () => {
  const isTablet = useMediaQuery(E_BreakPoints.table)

  return (
    <S.Links isTablet={isTablet}>
      <S.LinksInner isTablet={isTablet}>
        {linksData.map((link) => {
          return (
            <S.LinkItem
              href={link.to}
              key={link.to}
              style={{ color: '#fff', backgroundColor: link.color }}
            >
              {link.icon}
            </S.LinkItem>
          )
        })}
      </S.LinksInner>
    </S.Links>
  )
}
