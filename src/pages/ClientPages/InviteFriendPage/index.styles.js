import Button from '../../../atoms/Button'
import styled from 'styled-components'

export const ReferContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0rem 4rem 1rem;
  margin-left: -7rem;

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.68rem 3.75rem 2.1875rem 4.375rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 0.625rem 1.25rem 1.37rem 1.31rem;
  }
  .headline {
    font-size: 34px;
    line-height: 36px;
    font-weight: 400;
  }
  .text-basic {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    width: 40%;
  }
  }
  .text-footer {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    width: 674px;
    text-align: center;
    margin-top: 38px;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    width: 40%;
  }
  }
  .footer-href {
    text-decoration: none;
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
  margin: 1.06rem 0;
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    flex-direction: column;
  }
`
export const StyledForm = styled.form`
  width: 42%;
`

export const ButtonContainer = styled.div`
display:flex;
justify-content: center;
`
export const AtomicButton = styled(Button)`
  width: 67px;
  cursor: pointer;
`
