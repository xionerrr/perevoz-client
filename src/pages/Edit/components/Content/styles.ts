import styled from 'styled-components'

export const Content = styled.div`
  overflow: auto;

  width: 100%;
`

export const ContentInner = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 12px;
`

export const ContentInput = styled.input`
  width: 100%;
  height: 3.375rem;
  margin: 12px 0;
  padding: 13px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.38;
  color: #000;

  border: 1px solid #c2c2c2;
  border-radius: 2px;

  &[type='text']:focus {
    box-shadow: 0 -2px 0 0 #149708 inset;
  }
`

export const ContentNewTripBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: flex-end;

  padding: 12px 0;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 24px;
  }
`

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 32px 0;
`

export const ContentNewTrip = styled.button`
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

  @media (max-width: 968px) {
    width: 100%;
  }
`

export const ContentNewTripToMain = styled.button`
  cursor: pointer;

  min-width: 197px;
  padding: 16px 18px;

  font-size: 14px;
  line-height: 1.43;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  background-color: #888;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 9px 13px 0 rgb(0 0 0 / 34%);

  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #5f5573;
  }

  @media (max-width: 968px) {
    width: 100%;
  }
`

export const ContentListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 24px;

  background-color: #fff;
  border: 1px solid #e2e8f0;
`

export const ContentListItemTop = styled.div``

export const ContentListItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContentListItemTopButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`

export const ContentListItemLabel = styled.div`
  font-weight: 600;
`

export const ContentListItemTopButton = styled.button`
  cursor: pointer;

  color: #999;

  background-color: transparent;
  border: 0;

  &:hover {
    color: #149708;
  }
`
