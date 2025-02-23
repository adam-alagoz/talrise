import styled from 'styled-components'
import Button from '../../../atoms/Button'

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
  width: 18rem;
  height: 17rem;
  margin-bottom: 2rem;
`
export const AtomicButton = styled(Button)`
    margin-top:50px;
    width:110px;    
    cursor:pointer;
    height:40px;
`
