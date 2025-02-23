import styled from 'styled-components'
import Button from '../../atoms/Button'

export const StyledBody = styled.div`
  height: 100%;
  margin-top: 2rem;
  .headline {
    margin-bottom: 3rem;
  }
`

export const StyledContainer = styled.div`
  margin-top: 1rem;
  &.headerButton {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem;
  }
  .whiteInput {
    background-color: white;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`

export const StyledForm = styled.form`
  width: 100%;
`

export const AtomicButton = styled(Button)`
  width: 190px;
  cursor: pointer;
  height: 45px;
`
