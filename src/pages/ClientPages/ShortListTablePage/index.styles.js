import styled from 'styled-components';
import { Button as MUIButton } from '@mui/material';
import { Button } from '../../../atoms';

export const StyledContainer = styled.div`
  .MTableToolbar-root-5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-top: 20px;
  }

  .MTableToolbar-searchField-10 {
    border: 1px solid gray;
    border-radius: 5px;
    width: 28rem;
  }
`

export const StyledTableBody = styled.div`
  background: #ffffff;
  padding: .5rem 1rem;
`

export const AtomicButton = styled(Button)`
  width: auto;
  cursor: pointer;
`

export const StyledButton = styled(MUIButton)`
  width: 5.9375rem;
  height: 2.25rem;
  margin-bottom: 1.625rem;
  cursor: pointer;
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
