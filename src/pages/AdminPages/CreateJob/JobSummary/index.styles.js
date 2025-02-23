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

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  .layout-button {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
    margin: 10px;
    cursor: pointer;
  }
  .layout-save {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.white};
  }
  .layout-save:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
  .download-pdf {
    align-self: end;
    width: 14rem;
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

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .layout-button {
    cursor: pointer;
    width: 205px;
    height: 36px;
    border: none;
  }
  .layout-button:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
  .job-summary-headline {
    margin-left: 2.5rem;
  }
`
