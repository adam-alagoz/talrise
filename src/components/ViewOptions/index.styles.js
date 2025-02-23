import styled from 'styled-components'
import { Button } from '@mui/material'

export const StyledButton = styled(Button)`
  width: 5.9375rem;
  height: 2.25rem;
  margin-bottom: 1.625rem;
  cursor: pointer;
`

export const StyledHeader = styled.div`
  align-self: self-end;

  .layout-button {
    cursor: pointer;
    width: 12.8125rem;
    height: 2.25rem;
    border: none;
  }

  .layout-button:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`

export const StyledButtonBody = styled.div`
  display: flex;
  margin-top: 2rem;

  .job-button {
    width: 10.1875rem;
  }

  .list-button {
    width: 0.625rem;
  }

  .kanban-button {
    width: 0.625rem;
  }

  .buttonInsideBody {
    margin-left: auto;
  }
`
export const StyledButtonInsideBody = styled.div``

export const StyledImage = styled.img``

export const StyledBody = styled.div`
display: flex;
flex-direction: column;

  .sc-bczRLJ {
    display: block;
  }
  
  .MuiChip-root {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
    margin-bottom: 1.75rem;
  }
`
