import styled from 'styled-components'
import Text from '../../../../atoms/Text'

export const StyledContainer = styled.div``
export const StyledText = styled(Text)`
  margin-bottom: 0.3125rem;
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

  .headline {
    line-height: 1.5rem;
    margin: 0 0 0.31rem 0;
  }

  .text-basic {
    line-height: 1rem;
    letter-spacing: 0.025rem;
    padding-bottom: 1.5rem;
  }
`

export const StyledInsideBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
