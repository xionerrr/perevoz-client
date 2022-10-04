import styled from 'styled-components'

export const BookModal = styled.div`
  z-index: 1000;

  overflow: overlay;
  display: flex;
  justify-content: center;

  width: 90%;
  max-width: 625px;
  height: fit-content;
  min-height: 60%;
  max-height: 80%;

  background-color: #fff;
  border-radius: 9px;

  @media (max-width: 625px) {
    position: fixed;

    overflow: overlay;

    width: 100%;
    height: 100%;
    min-height: 100%;

    border-radius: 0;
  }
`

export const JoinBox = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  margin: 24px 0;
`

export const JoinLink = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: underline;

  img {
    width: 128px;
  }
`

export const BookModalLoader = styled.div`
  z-index: 1000;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  max-width: 625px;
  height: 70%;
  max-height: auto;

  background-color: #fff;
  border-radius: 9px;

  @media (max-width: 625px) {
    position: fixed;

    overflow-y: auto;

    width: 100%;
    height: 100%;

    border-radius: 0;
  }
`

export const BookModalInner = styled.div`
  position: relative;

  padding: 32px;
`

export const BookTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`

export const BookModalTitle = styled.div`
  font-size: 31px;
  font-weight: 700;
  color: #149708;
`

export const BookModalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 32px;
`

export const BookModalListItem = styled.div`
  font-size: 18px;
  font-weight: 500;

  &::before {
    content: '-';

    margin-right: 12px;
  }
`

export const BookModalItemDescriptionBox = styled.div`
  margin: 12px 0;
`

export const BookModalRoad = styled.div`
  font-size: 18px;
  font-weight: 500;
`

export const BookModalItemDescriptionTitle = styled.div`
  margin-bottom: 24px;

  font-size: 28px;
  font-weight: 600;
  color: #149708;
`

export const BookModalDescriptionLabel = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const BookModalRoadBox = styled.div`
  margin: 12px 0;
`

export const BookModalRoadTitle = styled.div`
  margin-bottom: 24px;

  font-size: 28px;
  font-weight: 600;
  color: #149708;
`

export const BookModalSubmitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding-bottom: 42px;

  @media (max-width: 625px) {
    padding-bottom: 42px;
  }
`

export const BookModalSubmit = styled.button`
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
export const BookModalError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 24px;

  font-size: 18px;
  color: #000;
  text-align: center;
`

export const BookModalErrorButton = styled.button`
  cursor: pointer;

  font-size: 16px;
  text-decoration: underline;

  background-color: transparent;
  border: 0;
`

export const BookModalClose = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  color: #000;

  background-color: transparent;
  border: 0;

  transition: all 0.3s;

  &:hover {
    color: #149708;
  }
`

export const BookDestLink = styled.a`
  font-size: 13px;
  color: #000;
  text-decoration: underline;
`
