import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Book = styled.div`
  padding: 72px 0;
`

export const BookInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  min-width: 320px;
  max-width: 968px;
  margin: 0 auto;
`

export const BookTitle = styled.h1`
  margin-bottom: 40px;
  padding: 18px;

  font-size: 64px;
  color: #149708;
  text-align: center;

  background-color: #f7f5f5;
  border: none;

  @media (max-width: 625px) {
    font-size: 48px;
  }
`

export const BookSubTitle = styled.div`
  margin-bottom: 24px;
`

export const BookWarning = styled.div`
  margin-bottom: 24px;
`

export const BookRedirect = styled(Link)`
  color: #000;
  text-decoration: underline;
`

export const BookInner = styled.div`
  width: 100%;
  width: 90%;
  min-width: 320px;
  max-width: 525px;
  margin: 0 auto;
`
