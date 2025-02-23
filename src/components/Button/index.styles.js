import styled from 'styled-components'
import { Button } from '@mui/material'

export const StyledContainer = styled.div``

export const StyledBody = styled.div`
  width: 100%;
  padding: 4.6875rem 6.25rem 1.875rem;
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.6875rem 5rem 1.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 1.5625rem;
  }
  .cancel {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
  }

  .save {
    height: 1.625rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.0781rem;
    margin-left: 6.125rem;
  }
`
export const StyledInsideBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const StyledButtonBody = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledButtonCancel = styled(Button)`
  &.cancel{
    background-color: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary};
}

&.cancel:hover {
    background-color: ${(p) => p.theme.colors.white};
  }
`

export const StyledButtonSave = styled(Button)`
&.save{
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.white};
}
&.save:hover {
    background-color: ${(p) => p.theme.colors.primary};
  }
`

