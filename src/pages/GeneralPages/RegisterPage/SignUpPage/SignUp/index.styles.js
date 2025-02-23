import Button from '../../../../../atoms/Button'
import styled from 'styled-components'
import { TextField, Text } from '../../../../../atoms'

export const StyledTextField = styled(TextField)`
  width: 25vw;
`
export const StyledText = styled(Text)``

export const StyledContainer = styled.div`
  margin-top: 0.9rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

@media (max-width: ${(p) => p.theme.breakPoints.sm}) {
  .containerBox {
      flex-direction: column;
  }
}
  .buttonDiv,
  .text-example {
    display: flex;
    justify-content: center;
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  .firstLastName{
  width: 12vw;
  }
`
export const StyledCheckBoxContainer = styled.div`
  margin-top: 0.9rem;
  width: 100%;

  .buttonDiv,
  .text-example {
    display: flex;
    justify-content: center;
  }
`
export const AtomicButton = styled(Button)`
  margin: 35px 0;
  height: 35px;
  width: 200px;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
`
export const StyledForm = styled.form`
  max-width: 60%;
`