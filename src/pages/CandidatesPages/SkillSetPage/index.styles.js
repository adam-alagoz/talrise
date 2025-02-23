import styled from 'styled-components'
import { Divider } from '@mui/material'
import Text from '../../../atoms/Text/index'
import { Button } from '@mui/material'

export const StyledContainer = styled.div``

export const StyledBody = styled.div`
  width: 100%;
  padding: 3.125rem 6.25rem 1.875rem;
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.6875rem 5rem 1.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 1.5625rem;
  }
`
export const StyledInsideBody = styled.div`
  display: flex;
  flex-direction: column;
  .headline {
    line-height: 1.5rem;
    margin: 0 0 0.31rem 0;
  }

  .text-basic {
    line-height: 1rem;
    letter-spacing: 0.025rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
`

export const StyledButton = styled(Button)`
  color: ${(p) => (p.selected ? p.theme.colors.primary : `#888A91`)} !important;
  border: 0.175rem solid ${(p) => (p.selected ? p.theme.colors.primary : '#888A91')} !important;
  border-radius: 0 !important;
  font-weight: ${(p) => (p.selected ? 600 : 400)} !important;
`
export const StyledButtonGroup = styled.div`
  display: flex;
  overflow-x: auto;
`

export const StyledDivider = styled(Divider)`
  &.divider {
    width: 100%;
    border-color: ${(p) => p.theme.colors.layoutLeftBorderColor};
    margin-bottom: 1.5625rem;
  }
`
export const StyledHeadline = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin: 0;
`
export const StyledSubtitle = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin: 0.3125rem 0 1.25rem;
`
