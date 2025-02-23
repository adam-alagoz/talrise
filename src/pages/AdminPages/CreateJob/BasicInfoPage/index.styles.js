import styled from 'styled-components'
import { TextField } from '../../../../atoms'

export const PersonalContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 0.125rem 12.18rem 1.875rem 5.93rem;
  height: 36rem;

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.68rem 3.75rem 2.1875rem 4.375rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 0.625rem 1.25rem 1.37rem 1.31rem;
  }

  .headline {
    line-height: 1.5rem;
    margin: 0 0 0.31rem 0;
  }

  .text-basic {
    line-height: 1rem;
    letter-spacing: 0.025rem;
    padding-bottom: 1.5rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    .headline {
      font-size: 1.25rem;
    }
    .text-basic {
      font-size: 0.875rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.06rem;
`

export const StyledTextField = styled(TextField)`
  input {
    display: inline-blok;
    box-sizing: border-box;
    height: 3.25rem;
  }
`

export const StyledForm = styled.form``
