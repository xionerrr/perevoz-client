import styled from 'styled-components'

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;
`

interface I_MainLayoutInnerProps {
  isDesktop: boolean
  isSidebarOpened: boolean
  isModalOpened: boolean
}

export const MainLayoutInner = styled.div<I_MainLayoutInnerProps>`
  position: relative;

  flex-grow: 1;

  width: 100%;
  height: 100%;
  margin-top: ${({ isDesktop }) => (isDesktop ? '81px' : '45px')};
`
