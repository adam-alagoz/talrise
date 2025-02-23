import styled from 'styled-components'
import Button  from '../../../../atoms/Button'

export const StyledFormContainer = styled.div`
  position: relative;
  .delete {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .btn-delete {
    text-transform: capitalize;
  }
  #explanationText:placeholder-shown {
    font-family: DM Sans;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 0.875rem;
    letter-spacing: 0.0156rem;
    text-align: left;
  }
  .explanation {
    background-color: ${(p) => p.theme.colors.unselectedItems};
    border-radius: 4px;
    margin-bottom: 1.25rem;
    width: 100%;
  }
  .explanationAdornment {
    color: rgba(0, 0, 0, 0.4);
  }
  .toolTechIds {
    margin: 1.25rem 0;
    width: 22.5rem;
    @media (max-width: ${(p) => p.theme.breakPoints.md}) {
      width: 100%;
    }
    height: 3.4375rem;
    background-color: ${(p) => p.theme.colors.unselectedItems};
    border-radius: 4px;
  }
  .line {
    padding: 0.625rem 0;
  }
`
export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  .firstName,
  .lastName {
    width: 100%;
  }
  .firstName,
  .jobTypeId {
    padding-right: 1rem;
  }
  .startDate,
  .endDate {
    width: 150px;
    padding-right: 2rem;
  }
  .noticePeriodId {
    width: 20.75rem;
  }
  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    flex-direction: column;
    gap: 2rem;
    .startDate,
    .endDate {
      width: 100%;
    }
    .noticePeriodId {
      width: 100%;
    }
  }
  @media (max-width: ${(p) => p.theme.breakPoints.lg}) {
    .startDate,
    .endDate {
      width: 100%;
      padding-right: 1rem;
    }
    .noticePeriodId {
      width: 100%;
    }
  }
`
export const StyledContainer = styled.div`
  .toolsAdded {
    display: flex;
    gap: 2rem;
    max-height: 9.5rem;
    overflow-y: auto;
    padding-bottom: 2rem;
  }
  .toolsSelected {
    padding-left: 0.4375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    border-radius: 4px;
    text-transform: capitalize;
  }
  .btn-toolTechIds {
    color: black;
    text-transform: none;
    padding-right: 0rem;
  }
  .btn-add {
    margin-bottom: 4rem;
  }
`
export const StyledSelectedTool = styled.div``
export const AtomicButton = styled(Button)`
  height: 36px;
  width:243px;
  &.delete{
    display: flex;
    justify-content: end;
    width: 73px;
    height: 15px;
  }
  &.close{
    padding-left:100px;
    color:black;
    width:100px;
  }
  &.btn-add {
    cursor: pointer; 
    margin-bottom:7rem;   
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.06rem;
  padding-top: 1rem;

  .countryCode {
    max-width: 6.25rem;
  }
`