import styled from 'styled-components'

interface I_LinksProps {
  isTablet: boolean
}

export const Links = styled.div<I_LinksProps>`
  position: absolute;
  top: ${({ isTablet }) => (isTablet ? '50%' : '94.25%')};
  left: ${({ isTablet }) => (isTablet ? '0' : '50%')};
  transform: ${({ isTablet }) => (isTablet ? 'translate(50%, -50%)' : 'translate(-50%, -50%)')};
`

interface I_LinksInnerProps {
  isTablet: boolean
}

export const LinksInner = styled.div<I_LinksInnerProps>`
  display: flex;
  flex-direction: ${({ isTablet }) => (isTablet ? 'column' : 'row')};
  gap: 24px;
`

export const LinkItem = styled.a`
  display: flex;
  align-items: center;

  padding: 12px;

  border-radius: 24px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 24%);

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 12px 0 #149708;
  }

  @media (max-width: 800px) {
    padding: 9px;
  }
`
