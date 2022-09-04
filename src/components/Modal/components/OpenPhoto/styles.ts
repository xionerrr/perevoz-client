import styled from 'styled-components'

export const OpenPhoto = styled.div`
  position: relative;
  z-index: 1000;
`

export const OpenPhotoInner = styled.div``

export const Photo = styled.img`
  max-width: 80vw;
  max-height: 80vh;
`
export const CloseBox = styled.div`
  position: absolute;
  z-index: 999;
  top: 24px;
  right: 24px;
`

export const CloseButton = styled.button`
  cursor: pointer;

  color: #fff;
  text-decoration: underline;

  background-color: transparent;
  border: 0;
`
