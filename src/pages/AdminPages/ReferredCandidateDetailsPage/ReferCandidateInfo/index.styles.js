import Button from '../../../../atoms/Button'
import styled from 'styled-components'

export const FirstContainer = styled.div`
  .firstHeadline {
    margin-left: -7rem;
  }
`
export const ReferContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  position: relative;
  margin-top: 2rem;
  width: 68.75rem;
  padding: 1.5625rem 0rem 4rem 1rem;
  margin-left: -7rem;

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.68rem 3.75rem 2.1875rem 4.375rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 0.625rem 1.25rem 1.37rem 1.31rem;
  }
  .headline {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.011rem;
    margin: 0 0 0.31rem 0;
  }

  .text-basic {
    font-weight: 400;
    font-size: 1rem;
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
export const InfoContainer = styled.div`
  width: 60%;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.06rem;

  .countryCode {
    max-width: 6.25rem;
  }
`
export const StyledForm = styled.form`
  padding-left: 3rem;
  width: 80%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 3rem 0rem 3rem;
`
export const AtomicButton = styled(Button)`
  width: 67px;
  cursor: pointer;
`
