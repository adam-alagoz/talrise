import styled from 'styled-components'
import Button from '../../../atoms/Button'

export const StyledContainer = styled.div`
  width: 100%;
  margin: 10px 0px;
`

export const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2px;
`

export const AtomicButton = styled(Button)`
  width: 181px;
  height: 36px;
  cursor: pointer;
  align-self: flex-end;
  border: none;
  margin-left: 10rem;
  margin-bottom: 7rem;
  overflow: hidden;
`
