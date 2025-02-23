import styled from 'styled-components'
import Button from '../../../../atoms/Button'

export const StyledContainer = styled.div`
  .MTableToolbar-root-5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-top: 20px;
  }

  .MTableToolbar-searchField-10 {
    border: 1px solid gray;
    border-radius: 5px;
    width: 35%;
  }

  .capitalized {
    text-transform: capitalize;
    text-transform: capitalize-turkish;
  }
`

export const StyledInputContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const StyledFilterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AtomicButton = styled(Button)`
  margin-top: 0;
  margin-right: 0px;
  width: 130px;
  cursor: pointer;
  height: 40px;
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top:0;
`

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction:column;
  height:fit-content;
  gap:0;
`

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content:space-between;
`
