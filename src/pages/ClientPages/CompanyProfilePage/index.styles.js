import styled from 'styled-components'
import { Button } from '@mui/material'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

export const StyledOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  color: #44b300;
  margin-top: 0.2rem;
  margin-right: 1rem;
`
export const StyledOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  color: red;
  margin-top: 0.2rem;
  margin-right: 1rem;
`
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
export const StyledButton = styled(Button)`
  margin: 10px;
  cursor: pointer;
`
export const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const StyledInfoBody = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
`
export const StyledInfoImg = styled.div`
  height: 4rem;
  border-radius: 50%;
  margin: 0 1rem;
`

export const StyledInfoWrapper = styled.div``
export const StyledInfoWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledInfoWrapper3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .text {
    display: flex;
    justify-content: flex-end;
  }
  .text2 {
    margin-left: 20px;
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
