import styled from 'styled-components'
import Button from '../../../atoms/Button'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .text-headline {
    text-align: center;
    display: block;
    letter-spacing: 0.0094rem;
    margin: 2rem 0;
    color: ${(p) => p.theme.colors.primary};
  }

  .logo1 {
    width: 40rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      width: 20rem;
    }
  }

  .form-control {
    width: 20rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      width: 16rem;
    }
    margin-bottom: 2rem;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20rem;
    margin-top: 2rem;
  }

  .form-group {
    display: flex;
    margin: 3rem 0 1rem;
    justify-content: center;
    flex-direction: row;
  }

  .reset-password {
    width: max-content;
    background: #701d9f;
    border-radius: 4px;
  }
`

export const AtomicButton = styled(Button)`
  width: 150px;
  cursor: pointer;
  height: 40px;
`

export const StyledImage = styled.img``

export const StyledForm = styled.form``
