import styled from 'styled-components'

export const AuthLayout = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: #fff;
`

export const AuthLayoutInner = styled.div`
  z-index: 1;

  place-self: center;

  padding: 0 16px;
`

export const GoBack = styled.button`
  cursor: pointer;

  position: absolute;
  top: 16px;
  left: 16px;

  display: flex;

  color: #000;

  background-color: transparent;
  border: 0;
  outline: 0;

  &:hover {
    svg {
      color: #149708;
    }
  }
`

export const FormBox = styled.div`
  min-width: 260px;
  max-width: 300px;
`
