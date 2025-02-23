import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 3.125rem 6.25rem 1.875rem;
  
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.6875rem 5rem 1.875rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 1.5625rem;
  }

  .form-container {
    position: relative;
  }
  
  .text-example{
  display: block;
  margin: 0;
}
`

export const StyledForm = styled.form``
export const StyledContainer = styled.div``
