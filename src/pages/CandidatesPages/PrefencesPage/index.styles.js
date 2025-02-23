import styled from 'styled-components'
// import { Button } from '@mui/material'
import Text from '../../../atoms/Text/index'
import TextField from '../../../atoms/TextField/index'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export const StyledContainer = styled.div`
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
export const StyledBox = styled(Box)``

export const StyledSlider = styled(Slider)`
  width: 100%;
`

export const StyledBody = styled.div`
  width: 100%;
  padding: 3.125rem 6.25rem 1.875rem;

  @media (max-width: ${(p) => p.theme.breakPoints.md}) {
    padding: 4.6875rem 5rem 1.875rem;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    padding: 1.5625rem;
  }
`

export const StyledInsideBody = styled.div`
  height: 100%;
  position: relative;
`

export const StyledHeadline = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin: 0;
`

export const StyledSubtitle = styled(Text)`
  color: ${(p) => p.theme.colors.headLineColor};
  display: block;
  margin: 0.3125rem 0 1.25rem;
`

export const StyledForm = styled.form`
  position: relative;
  .btn-delete {
    position: absolute;
    right: 0;
  }
  margin-bottom: 6rem;
  .btn-delete {
    text-transform: capitalize;
  }

  .preferencesContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.sm}) {
    .preferencesContainer {
      flex-direction: column;
    }
  }
`

export const StyledTextField = styled(TextField)`
  width: 100%;
`

export const StyledText = styled(Text)``
