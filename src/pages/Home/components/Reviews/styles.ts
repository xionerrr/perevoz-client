import styled from 'styled-components'

export const Reviews = styled.div`
  padding: 72px 0;

  background-color: #232329;
`

export const ReviewsInner = styled.div`
  position: relative;

  width: 90%;
  max-width: 1268px;
  margin: 0 auto;
`

export const ReviewsTitle = styled.h3`
  margin-bottom: 40px;

  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-align: center;

  @media (max-width: 625px) {
    font-size: 24px;
  }
`

interface I_ReviewsBoxProps {
  isMore: boolean
}

export const ReviewsBox = styled.div<I_ReviewsBoxProps>`
  position: relative;

  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  max-height: ${({ isMore }) => (isMore ? 'auto' : '525px')};

  @media (max-width: 625px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0;

    max-height: ${({ isMore }) => (isMore ? 'auto' : '425px')};
  }
`

export const ReviewsMore = styled.div`
  pointer-events: none;

  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 128px 0 32px;

  background-image: linear-gradient(to top, #232329, transparent);
`

export const ReviewsButton = styled.button`
  pointer-events: auto;
  cursor: pointer;

  height: 48px;
  padding: 0 24px;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;

  background-color: #334155;
  border: 0;
  border-radius: 9px;

  &:hover {
    background-color: #597194;
    box-shadow: 0 0 4px 2px #fff;
  }
`

export const ReviewsList = styled.ul``

export const ReviewsItem = styled.li``

export const ReviewImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 9px;
`
