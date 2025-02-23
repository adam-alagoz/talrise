import styled from 'styled-components'
import Button from '../../../../atoms/Button'

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: white;
  padding: 1.0625rem;
  .text-404 {
    text-align: center;
    line-height: 1.5rem;
    letter-spacing: 0.0313rem;
  }
`
export const StyledImage = styled.img`
width: 1.2rem;
height: 1.2rem;
float: right

  .logo1 {
    width: 3rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      width: 3rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      width: 3rem;
    }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  float: right;
  .matches {
    width: 14.5rem;
    margin-top: 10px;
    margin-buttom: 10px;
  }
  .save {
    width: 6rem;
    height: 2.2rem;
  }
  .apply {
    width: 7rem;
  }
`

export const AtomicButton = styled(Button)`
  margin-top: 30px;
  margin-right: 0px;
  width: 130px;
  cursor: pointer;
  height: 40px;
`

export const InnerContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
  margin-top: 1.2rem;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`