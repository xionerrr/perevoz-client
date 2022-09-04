import styled from 'styled-components'

export const EditTripModal = styled.div`
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

export const EditTripModalInner = styled.form`
  position: relative;

  overflow: auto;

  width: 100%;
  padding: 32px;
`

export const EditTripModalSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`

export const EditTripModalTitle = styled.div`
  font-size: 31px;
  font-weight: 700;
  color: #149708;
`

export const EditTripModalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 32px;
`

export const EditTripModalListItem = styled.div`
  position: relative;

  font-size: 18px;
  font-weight: 500;
`

export const EditTripModalItemDescriptionBox = styled.div`
  margin: 12px 0;
`

export const EditTripModalRoad = styled.div`
  font-size: 18px;
  font-weight: 500;
`

export const EditTripModalItemDescriptionTitle = styled.div`
  margin-bottom: 24px;

  font-size: 28px;
  font-weight: 600;
  color: #149708;
`

export const EditTripModalDescriptionLabel = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const EditTripModalRoadBox = styled.div`
  margin: 12px 0;
`

export const EditTripModalRoadTitle = styled.div`
  margin-bottom: 24px;

  font-size: 28px;
  font-weight: 600;
  color: #149708;
`

export const EditTripModalSubmitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const EditTripLabel = styled.label`
  pointer-events: none;

  position: absolute;
  top: 10px;
  left: 16px;

  margin-left: -2px;

  font-size: 12px;
  font-weight: 500;
  color: #5f5573;

  background-color: #fff;
`

export const EditTripInput = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 24px 13px 9px;

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

export const EditTripInputRoad = styled.input`
  width: 100%;
  height: 3.375rem;
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

export const EditTripTextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 24px 13px 9px;

  font-size: 14px;
  line-height: 20px;
  color: #000;
  vertical-align: middle;

  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  box-shadow: 0 0 transparent;

  &:focus {
    box-shadow: 0 -2px 0 0 #149708 inset;
  }
`

export const EditTripModalSubmit = styled.button`
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

export const EditTripModalClose = styled.button`
  cursor: pointer;

  display: flex;

  color: #000;

  background-color: transparent;
  border: 0;

  transition: all 0.3s;

  &:hover {
    color: #149708;
  }
`

export const EditTripRoadList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 32px 13px 9px;

  font-size: 14px;
  line-height: 20px;
  color: #000;
  vertical-align: middle;

  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  box-shadow: 0 0 transparent;

  &:focus {
    box-shadow: 0 -2px 0 0 #149708 inset;
  }
`

export const EditTripScheduleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 32px 13px 9px;

  font-size: 14px;
  line-height: 20px;
  color: #000;
  vertical-align: middle;

  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  box-shadow: 0 0 transparent;

  &:focus {
    box-shadow: 0 -2px 0 0 #149708 inset;
  }
`

export const EditTripRoadDelete = styled.button`
  cursor: pointer;

  display: flex;

  color: #000;

  background-color: transparent;
  border: 0;
`

export const EditTripRoadAdd = styled.button`
  cursor: pointer;

  position: absolute;
  top: 3px;
  right: 6px;
  transform: translate(-50%, 50%);

  display: flex;

  color: #149708;

  background-color: transparent;
  border: 0;
`

export const EditTripRoadItem = styled.div`
  display: flex;
  gap: 6px;

  padding: 6px 12px;

  font-size: 14px;
  color: #fff;

  background-color: #149708;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 34%);
`

export const EditTripRoadInputToAdd = styled.div`
  position: relative;

  width: 100%;
  height: 3.375rem;
  margin: 12px 0;
`

export const EditTripScheduleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 13px;

  font-size: 14px;
  line-height: 20px;
  color: #000;
  vertical-align: middle;

  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #c2c2c2;
  border-radius: 2px;
  box-shadow: 0 0 transparent;

  &:focus {
    box-shadow: 0 -2px 0 0 #149708 inset;
  }
`

export const EditTripScheduleItem = styled.div`
  display: flex;
  gap: 6px;

  padding: 6px 12px;

  font-size: 14px;
  color: #fff;

  background-color: #149708;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 34%);
`

export const EditTripScheduleDelete = styled.button`
  cursor: pointer;

  display: flex;

  color: #000;

  background-color: transparent;
  border: 0;
`
