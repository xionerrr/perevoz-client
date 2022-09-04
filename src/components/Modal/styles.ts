import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Modal = styled(motion.div)`
  touch-action: none;

  position: fixed;
  z-index: 995;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  box-shadow: 8px 0 15px -3px rgb(0 0 0 / 10%);
`

export const ModalOverlay = styled.div`
  touch-action: none;

  position: fixed;
  z-index: 996;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgb(0 0 0 / 50%);
`
