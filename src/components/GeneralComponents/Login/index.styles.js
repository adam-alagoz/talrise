import styled from 'styled-components'
import Button from '../../../atoms/Button'

export const StyledContainer = styled.div`
  justify-content: center;
  text-align: center;

  .text-login {
    text-align: center;
    display: block;
    letter-spacing: 0.0094rem;
    margin: 4rem 0;
    font-weight: bold;
  }

  .logo2 {
    width: 3rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      width: 3rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      width: 3rem;
    }
  }

  .form-control {
    margin-bottom: 1rem;
  }

  .text-talrise {
    margin: 13rem 0 5.6rem;
    text-align: center;
    display: block;
    letter-spacing: 0.0094rem;
    color: ${(p) => p.theme.colors.white};
  }

  .form-input {
    flex-direction: column;
    display: flex;
  }

  .form-group {
    display: flex;
    margin: 3rem 0 1rem;
    justify-content: center;
    flex-direction: row;
  }

  .login {
    width: 100%;
    background: #701d9f;
    border-radius: 4px;
    margin-top: 2rem;
  }

  .social-form {
    cursor: pointer;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      gap: 1.5rem;
    }
    .social-logo {
      width: 2.625rem;
    }
  }

  .login-font {
    margin: 1rem 0 6rem;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
  }
`

export const AtomicButton = styled(Button)`
  width: 150px;
  cursor: pointer;
  height: 40px;
`

export const StyledImage = styled.img``

export const StyledForm = styled.form``
