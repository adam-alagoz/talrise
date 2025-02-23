import styled from 'styled-components'
import Button from '../../../atoms/Button'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const StyledContainer = styled.div`
  padding: 4.6875rem 3.125rem 1.875rem 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const BetweenContainer = styled.div`
  padding-right: 3.125rem;
  display: flex;
  justify-content: end;
  margin-bottom: 6.25rem;
  .nextButton {
    width: max-content;
    padding: 0.625rem;
  }
`

export const AtomicButton = styled(Button)`
 
  cursor: ${(p) => ( p.disabled? "default": "pointer")};
 
  &.btn {
    height: 3.125rem;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1.25rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.5625rem;
    color: ${(p) => ( p.disabled? `#C0C2CC`: (p.selected ? p.theme.colors.primary : `#888A91`))};
    border: 0.155rem solid ${(p) => (p.selected ? p.theme.colors.primary : `lightgrey`)};
  }
  .text {
    color: ${(p) => ( p.disabled? `#C0C2CC`: (p.selected ? p.theme.colors.primary : `#888A91`))};;
    display: flex;
    justify-content: start;
    width: 18.75rem;
    margin-left: 30px;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    .text {
      width: 100px;
    }
  }
  @media (max-width: ${(p) => p.theme.breakPoints.lg}) {
    .text {
      width: 130px;
    }
  }
`
