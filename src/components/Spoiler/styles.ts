import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Spoiler = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  bottom: 0;

  width: 100%;
  height: 128px;

  background-color: #fff;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 12%);
`

export const SpoilerInner = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  padding: 24px 48px;

  color: #000;
`

export const SpoilerTitle = styled.div`
  margin-bottom: 4px;

  font-weight: 600;
`

export const SpoilerSubTitle = styled.p`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const SpoilerClose = styled.button`
  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 32px;
  transform: translate(50%, -50%);

  color: #000;

  background-color: transparent;
  border: 0;
`
