import styled from 'styled-components'
import Table from '../../components/Table/index'
import { Chip, Button } from '@mui/material'

export const StyledTable = styled(Table)`
  width: 100%;
`
export const StyledButton = styled(Button)`
  width: 5.9375rem;
  height: 2.25rem;
  margin-bottom: 1.625rem;
  cursor: pointer;
`
export const StyledButtonBody = styled.div`
  display: flex;
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
export const StyledChip = styled(Chip)``
export const StyledBody = styled.div`
  .sc-bczRLJ {
    display: block;
  }
  .addButton,
  .leftButton,
  .rightButton {
    margin-bottom: 1.625rem;
  }
  .MuiChip-root {
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
    margin-bottom: 1.75rem;
  }
  .applyButton {
    margin-left: auto;
    width: auto;
  }
`

export const StyledKanbanBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
export const StyledKanbanBox = styled.div`
  width: 30%;
  border: 1px solid #d8d8d8;
  align-items: center;
  border: 0.0625rem solid #d8d8d8;
`
export const StyledKanbanHeadline = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.0938rem;
  text-transform: uppercase;
  color: rgba(0, 11, 42, 0.88);
  width: 100%;
  height: 3rem;
  background: rgba(72, 94, 173, 0.08);
`
export const StyledKanbanCard = styled.div`
  width: 15rem;
  height: 7.8125rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.0156rem;
  color: #545557;
  background: rgba(0, 39, 125, 0.12);
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`
export const StyledImage = styled.img``
export const StyledHeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  .applyButton {
    margin-top: 22.78px;
  }
`
