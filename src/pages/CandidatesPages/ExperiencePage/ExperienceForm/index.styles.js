import { Tooltip } from '@mui/material'
import styled from 'styled-components'
import Button from '../../../../atoms/Button'

export const StyledFormContainer = styled.div`
  position: relative;
  margin-bottom: 6.25rem;
  .delete {
    position: absolute;
    right: 0;
  }
  #explanationText:placeholder-shown {
    font-family: DM Sans;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 0.875rem;
    letter-spacing: 0.0156rem;
    text-align: left;
  }
  .explanation {
    background-color: ${(p) => p.theme.colors.unselectedItems};
    border-radius: 4px;
    margin-bottom: 1.25rem;
    width: 100%;
  }
  .explanationAdornment {
    color: rgba(0, 0, 0, 0.4);
  }
  .toolIds {
    margin: 1.25rem 0;
    width: 22.5rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      width: 100%;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      background-color: ${(p) => p.theme.colors.unselectedItems};
      border-radius: 4px;
    }
  }
  .line {
    padding: 0.625rem 0;
  }
  .experience-subtitle-container {
    width: fit-content;
    max-width: 100%;
  }
`
export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const StyledContainer = styled.div`
  .toolsAdded {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 9.5rem;
    overflow-y: auto;
    margin-bottom: 1rem;
  }
  .toolsSelected {
    padding-left: 0.625rem;
    margin: 0.625rem 0.625rem 0.625rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    border-radius: 4px;
    text-transform: capitalize;
  }
`
export const StyledCheckBoxContainer = styled.div`
  width: max-content;
  .toolsAdded {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 9.5rem;
    overflow-y: auto;
    margin-bottom: 1rem;
  }
  .toolsSelected {
    padding-left: 0.625rem;
    margin: 0.625rem 0.625rem 0.625rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    border-radius: 4px;
    text-transform: capitalize;
  }
  .btn-add {
    margin-bottom: 4rem;
  }
`
export const StyledSelectedTool = styled.div``
export const AtomicButton = styled(Button)`
  height: 2.5rem;
  width: 13.75rem;
  &.delete {
    width: 5.625rem;
    height: 1.875rem;
  }
  &.close {
    color: black;
    width: auto;
    text-transform: none;
  }
  :hover {
    cursor: pointer;
  }
`

export const StyledToolsContainer = styled.div``

export const StyledTooltip = styled(Tooltip)``
