import Button from '../../atoms/Button'
import styled from 'styled-components'

export const FirstContainer = styled.div``
export const ReferContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  position: relative;
  margin-top: 2rem;
  width: 100%;
  padding: 1.5625rem 0rem 4rem 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.68rem 3.75rem 2.1875rem 4.375rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 0.625rem 1.25rem 1.37rem 1.31rem;
  }
  .headline {
    font-size: 20px;
    font-weight: 500;
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
  width: 40%;
  margin-left: 30%;
  margin-top: 5%;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.06rem;
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
  flex-direction:column;
  }
`
export const StyledForm = styled.form`
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10% 5% 0 5%;
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
  flex-direction:column;
  }
`
export const AtomicButton = styled(Button)`
  width: 67px;
  cursor: pointer;
`
