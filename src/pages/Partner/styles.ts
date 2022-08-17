import styled from 'styled-components'

export const Partner = styled.div`
  position: relative;

  padding: 72px 0;
`

export const PartnerInner = styled.div`
  width: 90%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`

export const PartnerTitle = styled.h3`
  margin-bottom: 40px;

  font-size: 64px;
`

export const PartnerSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: 968px;
  margin-bottom: 40px;

  font-size: 21px;
`

export const PartnerParagraph = styled.p``

export const PartnerPhones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  width: 100%;
  max-width: 968px;
`

export const PartnerPhoneLink = styled.a`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  color: #000;

  svg {
    color: #149708;
  }

  &:hover {
    color: #777;
  }
`
