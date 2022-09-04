import styled from 'styled-components'

export const Edit = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;

  width: 100%;
  height: 100vh;

  background-color: #f1f5f9;
`

export const LogoutBox = styled.div`
  position: absolute;
  top: 0;
  left: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 24px 0;

  @media (max-width: 1540px) {
    position: relative;

    align-items: flex-start;
    justify-content: flex-start;

    margin: 32px 24px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`

export const Logout = styled.button`
  cursor: pointer;

  font-size: 18px;
  font-weight: 500;

  background-color: transparent;
  border: 0;

  &:hover {
    svg {
      fill: #149708;
    }
  }
`
