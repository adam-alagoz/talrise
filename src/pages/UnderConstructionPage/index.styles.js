import styled from 'styled-components'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text-404 {
    text-align: center;
    line-height: 1.5rem;
    letter-spacing: 0.0313rem;
  }
`
export const StyledImage = styled.img`
  margin-top: -2rem;
  width: 60%;
`
export const StyledText = styled(Text)`
  margin-top: -4.5rem;
  span {
    color: ${(p) => p.theme.colors.primary700};
    font-size: 2.25rem;
  }
  p {
    margin-top:0;
  }
`
export const AtomicButton = styled(Button)`
  margin-top: 3rem;
  width: 110px;
  cursor: pointer;
  height: 35px;
`
