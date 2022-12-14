import styled from 'styled-components'

import { ROUTES } from 'utils/constants/routes'

interface I_FaqListProps {
  $locationPathname: string
}

export const FaqList = styled.div<I_FaqListProps>`
  position: relative;

  width: 100%;
  max-width: 968px;
  margin: ${({ $locationPathname }) => ($locationPathname === ROUTES.faq ? '0' : '0 auto')};
`

export const FaqListInner = styled.div`
  position: relative;
  z-index: 2;
`

export const FaqListItems = styled.div``

export const FaqListItem = styled.div``

interface I_FaqListItemControlProps {
  $isOpened: boolean
}

export const FaqListItemControl = styled.div<I_FaqListItemControlProps>`
  cursor: pointer;

  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 20px;

  background-color: transparent;
  border-bottom: ${({ $isOpened }) => ($isOpened ? '2px solid #149708' : '2px solid #149708')};
  box-shadow: ${({ $isOpened }) => ($isOpened ? '-1.1px 13px 35px 0 rgb(0 0 0 / 10%)' : 'none')};

  transition: all 0.35s ease;

  &:hover {
    background-color: #f7f5f5;
  }
`

interface I_FaqListItemContentProps {
  $isOpened: boolean
}

export const FaqListItemContent = styled.div<I_FaqListItemContentProps>`
  overflow: hidden;

  max-height: ${({ $isOpened }) => ($isOpened ? '625px' : '0px')};

  visibility: ${({ $isOpened }) => ($isOpened ? 'visible' : 'hidden')};
  opacity: ${({ $isOpened }) => ($isOpened ? '1' : '0')};
  background-color: #fff;

  transition: all 0.5s ease;
`

export const FaqListItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  color: #149708;

  background-color: transparent;
`

export const FaqListItemLabel = styled.div`
  font-size: 18px;

  @media (max-width: 625px) {
    padding: 6px;

    font-size: 16px;
  }
`

export const FaqListItemContentInner = styled.div`
  padding: 42px;
`

export const FaqListItemContentDescription = styled.div``

export const FaqQuestion = styled.div`
  user-select: none;

  position: absolute;
  z-index: 0;
  right: 16px;
  bottom: 0;

  overflow: hidden;

  font-size: 725px;
  color: #149708;

  @media (max-width: 425px) {
    bottom: 96px;

    font-size: 525px;
  }
`
