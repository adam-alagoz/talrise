import styled from 'styled-components'
import Button from '../../atoms/Button'
import vector from '../../assets/svg/Vector.svg'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #701d9f;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position: bottom left;
`
export const BodyContainer = styled.div`
  display: flex;
  height: 80rem;
  margin: 38px 150px;
`
export const AtomicButton = styled(Button)`
  width: 93px;
  cursor: pointer;
`
export const LeftContainer = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  .talrise {
    margin: 5% 0 6% 5%;
  }
  .welcome {
    margin: 10% 15%;
  }
`
export const RightContainer = styled.div`
  width: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .rightImage {
    width: 30%;
    height: 10%;
    margin-right: 10%;
  }
  .rightText {
    font-size: 24px;
    font-weight: 400px;
    line-height: 10px;
    margin: 20% 0%;
  }
`
