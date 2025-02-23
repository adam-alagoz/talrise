import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'

export const StyledTable = styled.div`
  .button {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    border: none;
    cursor: pointer;
  }
  .search-button {
    margin-left: 26px;
  }
`
export const StyledContainer = styled.div`
  padding: 25px 33px;
  background-color: white;
  box-shadow: 0rem 0.25rem 0.25rem ${(p) => p.theme.colors.blackForShadow};
  box-sizing: border-box;
  .button {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    border: none;
    cursor: pointer;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  .next-button {
    width: max-content;
    right: 7%;
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.white};
  }
  .prev-button {
    width: max-content;
    left: 7%;
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
  }
  .prev-button:hover {
    background-color: ${(p) => p.theme.colors.white};
  }

  .next-button:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`
export const StyledButtonContainer = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  margin-left: 70%;
  margin-bottom: 2rem;
`
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
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
`
export const StyledComponentContainer = styled.div`
  min-height: 65vh;
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
export const StyledOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  color: #44b300;
  margin-top: 0.2rem;
  margin-right: 1rem;
`
export const StyledAccordionContainer = styled.div`
  width: 100%;
`