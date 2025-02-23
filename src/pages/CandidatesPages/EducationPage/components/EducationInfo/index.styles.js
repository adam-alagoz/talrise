import styled from 'styled-components'
import Button from '../../../../../atoms/Button'
import { Autocomplete } from '@mui/material'
 
export const StyledContainer = styled.div`
position: relative;
.css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
  height: 3.21rem;
}
  .degree {
    width: 50%;
  }

  .addEdu {
    margin-bottom: 20px;
  }
  
  .btn-delete-container {
    display: flex;
    justify-content: end;
  }

  .btn-delete {
    color: ${(p) => p.theme.colors.primary};
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    width: 70px;
    padding: 0px;
    position: absolute;
  }

  .containerBox {
    display: flex;
    flex-direction: row;
    gap: 1px;
    margin-bottom: 20px;
  }
  .first{
    margin-top: 2rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    .containerBox {
      flex-direction: column;
    }
    .degree {
      width: 100%;
    }
  }

`


export const AtomicButton = styled(Button)`
  width: 160px;
  height: 40px;
  cursor: pointer;
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
