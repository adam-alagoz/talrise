import { Box } from '@mui/material'
import styled from 'styled-components'

export const StyledBox = styled(Box)`
  .MuiStepLabel-root {
    &:hover {
      cursor: pointer;
    }
  }

  .MuiStepLabel-label {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: black;
  }

  .MuiStepIcon-text {
    fill: secondary;
  }

  svg {
    color: primary;
  }

  .Mui-completed {
    svg {
      color: #701d9f;
    }
  }

  .Mui-active {
    svg {
      color: #701d9f;
    }

    &.MuiStepLabel-label {
      color: #701d9f;
    }
  }

  svg.Mui-active {
    border: 3px solid #701d9f;
    border-radius: 50%;
    color: #701d9f;
    transform: translate(-2px);
  }
`
