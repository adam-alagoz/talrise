import styled from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'
import Button from '../Button'

export const StyledContainer = styled.div`
  .box {
    position: absolute;
    top: 9.375rem;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 28.125rem;
    min-height: 220px;
    background: ${(p) => p.theme.colors.white};
    border: 0.0625rem solid ${(p) => p.theme.colors.modalBorderColor};
    border-radius: 4px;
    transform: translateX(-50%);
  }
`

export const AtomicButton = styled(Button)`
  margin-bottom: 1rem;
  width: 10rem;
  font-weight: 500;
`

export const CloseButton = styled(AiFillCloseCircle)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0.9375rem;
  top: 0.6875rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`

export const InBox = styled.div`
  width: calc(100% - 2.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 2.9375rem 1.25rem;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  line-height: 1.25rem;
`
