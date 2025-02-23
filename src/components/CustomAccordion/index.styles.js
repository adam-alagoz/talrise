import styled from 'styled-components'
import { Button } from '@mui/material'

export const StyledAccordionBox = styled.div`
  padding: 25px 33px;
  background-color: white;
  .layout-button {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
    margin: 10px;
    cursor: pointer;
    font-family: 'DM Sans';
  }
  .layout-cancel {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
  }
  .layout-save {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.white};
  }
  .layout-cancel:hover {
    background-color: ${(p) => p.theme.colors.white};
  }

  .layout-save:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`
export const StyledAccordionContainer = styled.div`
  width: 100%;
`
export const StyledButtonContainer = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  margin-left: 70%;
  margin-bottom: 2rem;
`
export const AtomicButton = styled(Button)`
  width: 195px;
  height: 35px;
  margin-bottom: 22px;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.white};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.0781rem;
  margin: 10px;
  cursor: pointer;
`