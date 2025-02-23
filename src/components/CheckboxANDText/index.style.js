import styled from 'styled-components'
import { TextField } from '../../atoms'

export const StyledContainer = styled.div`
  width: 100%;
  height: 36rem;
  background-color: ${(p) => p.theme.colors.white};
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 99px;
  .interview-headline {
    margin: 0;
  }
  .interview-form {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: -2px;
  }
`

export const OtherFieldInput = styled(TextField)`
  width: 203px;
  background: rgba(227, 230, 242, 1);
  font-size: 12px;
`