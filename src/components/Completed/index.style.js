import styled from 'styled-components'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text-unsuccess {
    text-align: center;
    line-height: 1.5rem;
    letter-spacing: 0.0313rem;
  }
`
export const StyledImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 6.8125rem auto 1.875rem;
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
   width: 50%;
  }
`
export const StyledBottomImage = styled.img`
  width: 16rem;
  margin-top: 7%;

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
   width: 70%;
  }
  
`

export const StyledText = styled(Text)`
  max-width: 554px;
  text-align: center;
`

export const AtomicButton = styled(Button)`
  margin-top: 50px;
  width: auto;
  cursor: pointer;
`
