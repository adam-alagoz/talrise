import Box from '@mui/material/Box'
import styled from 'styled-components'
import Button from '../../../atoms/Button'

export const StyledBox = styled(Box)`
  display: flex;
  padding: 1;
  margin: 1;
  border-radius: 1;
  align-self: center;
  justify-content: space-between;
  .outerBox {
    width: 100%;
  }
  .innerBox {
    .favIcon {
      align-self: center;
    }
  }
`

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
`
export const StyledImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  float: right;
  margin: 0;
  padding: 0;
`

export const AtomicButton = styled(Button)`
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  height: 40px;
`
