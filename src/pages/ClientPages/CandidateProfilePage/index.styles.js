import styled from 'styled-components'
import { Button as MUIButton } from '@mui/material'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import Button from '../../../atoms/Button'
import SelectItem from '../../../components/SelectItem'
import { Autocomplete } from '@mui/material'
import TextField from '../../../atoms/TextField/index'

export const StyledOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  color: #44b300;
  margin-top: 0.2rem;
  margin-right: 1rem;
`

export const StyledOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  color: red;
  margin-top: 0.2rem;
  margin-right: 1rem;
`

export const StyledExperinceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const StyledSelectItem = styled(SelectItem)`
  &.select-item {
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 1rem;
    padding: 0;
  }

  .MuiSelect-select {
    padding-top: 0.5rem;
    padding-bottom: 0.4rem;
    font-size: 1rem;
    font-family: 'DM Sans';

    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      font-size: 0.7rem;
      font-family: 'DM Sans';
    }
  }
`

export const StyledButton2 = styled(MUIButton)`
  &.listedButton {
    height: 2.1875rem;
    background-color: ${(p) => p.theme.colors.unselectedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 0.0156rem;
    text-transform: capitalize;
    overflow: hidden;

    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      font-size: 0.6rem;
      line-height: 0.7rem;
    }
  }

  &.added {
    width: 100%;
    margin-right: 0.5rem;
    background-color: ${(p) => p.theme.colors.addedItems};
    color: ${(p) => p.theme.colors.black};
    font-family: 'DM Sans';
    text-transform: capitalize;
    font-size: 0.8rem;
    line-height: 1rem;
    height: 2.1875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    min-width: 8rem;

    @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
      font-size: 0.6rem;
      line-height: 0.7rem;
    }

    .icon {
      position: absolute;
      right: 0.6rem;
      bottom: 0.7rem;
      color: ${(p) => p.theme.colors.black};
      width: 0.6rem;
      height: 0.6rem;

      @media (max-width: ${(p) => p.theme.breakPoints.lg}) {
        width: 0.5rem;
        height: 0.5rem;
        right: 0.5rem;
        bottom: 0.8rem;
      }
    }
  }

  &.link {
    color: ${(p) => p.theme.colors.primary};
    text-transform: Capitalize;
    justify-content: flex-start;
    height: 2.1875rem;
  }
`

export const StyledButton = styled(MUIButton)`
  margin: 10px;
  cursor: pointer;
`

export const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const StyledCVContainer = styled.div`
  width: 30%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 0.5rem;
`

export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-top: 1rem;
`

export const StyledInfoBody = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
`

export const StyledInfoImg = styled.div`
  height: 4rem;
  border-radius: 50%;
  margin: 0 1rem;
`

export const StyledInfoWrapper = styled.div`
.capitalize{
text-transform: capitalize;
}
`

export const StyledJobInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1rem;
  gap: 0.5rem;
`

export const StyledHeader = styled.div`
  display: flex;
`

export const StyledInfoWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInfoWrapper3 = styled.div`
  display: flex;
  justify-content: right;
`

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const AtomicButton = styled(Button)`
  margin-top: 0;
  margin-right: 0px;
  width: 130px;
  cursor: pointer;
  height: 40px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.06rem;

  .countryCode {
    max-width: 6.25rem;
  }
`

export const StyledForm = styled.form`
  margin-top: 2rem;
`

export const StyledContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 3.125rem 12.18rem 1.875rem 5.93rem;

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.68rem 3.75rem 2.1875rem 4.375rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 0.625rem 1.25rem 1.37rem 1.31rem;
  }

  .headline {
    line-height: 1.5rem;
    margin: 0 0 0.31rem 0;
  }

  .text-basic {
    line-height: 1rem;
    letter-spacing: 0.025rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    .headline {
      font-size: 1.25rem;
    }

    .text-basic {
      font-size: 0.875rem;
    }
  }
`

export const Hr = styled.hr``

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 2rem;

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const StyledAutocomplete = styled(Autocomplete)`
  [class*='MuiInputLabel-root'].Mui-focused {
    color: ${({ theme }) => theme.colors.primary650};
  }
  
  [class*='MuiOutlinedInput-root'].Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 0.125rem solid ${({ theme }) => theme.colors.primary650};
  }

  .MuiInputBase-root {
    height: 51px;
  }
`

export const StyledTextField = styled(TextField)`
  width: 100%;
`

export const StyledContainerInput = styled.div`
  &.containerBox {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    .containerBox {
      flex-direction: column;
    }
  }

  .buttonDiv {
    display: flex;
    justify-content: center;
  }

  .text-example {
    display: grid;
    justify-content: left;
  }
`
