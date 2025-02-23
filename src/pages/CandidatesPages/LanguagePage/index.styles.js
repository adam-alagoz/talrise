import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
`

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
  height: 100%;
  position: relative;
`
