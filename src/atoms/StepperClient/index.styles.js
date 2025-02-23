import { Box } from '@mui/material'
import styled from 'styled-components'

export const StyledBox = styled(Box)`
  .MuiStepLabel-label {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.white};
  }
  .MuiStepIcon-text {
    fill: rgba(0, 0, 0, 0.7);
  }
  svg {
    color: white;
  }
  .Mui-completed,
  .Mui-active {
    svg {
      color: #f7cb74;
    }

    &.MuiStepLabel-label {
      color: #f7cb74;
    }
  }

  svg.Mui-active {
    border: 3px solid #c4940b;
    border-radius: 50%;
    color: white;
    transform: translate(-2px);
  }
`
