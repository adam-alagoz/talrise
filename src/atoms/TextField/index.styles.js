import styled from 'styled-components'
import { FormControl, TextField } from '@mui/material'

export const StyledFormControl = styled(FormControl)`
  display: inline;
  width: 100%;
  font-family: 'DM Sans';
`
export const StyledTextField = styled(TextField)`
  input:placeholder-shown {
    font-style: italic;
    font-size: 0.75rem;
    font-family: 'DM Sans';
  }
  input {
    padding: 0.875rem;
    font-family: 'DM Sans';
  }
  width: 100%;
  border-radius: 3px;
  .MuiInputLabel-root {
    font-family: 'DM Sans';
  }
`
