import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 3.125rem 6.25rem 1.875rem;
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.6875rem 5rem 1.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 1.875rem;
  }
`
export const StyledContainer = styled.div`
  .experience-headline {
    display: grid;
    margin: 0 auto 0px auto;
  }
  .experience-subtitle {
    display: grid;
    margin: 0 auto 1.5625rem auto;
  }
`

export const StyledForm = styled.form``
