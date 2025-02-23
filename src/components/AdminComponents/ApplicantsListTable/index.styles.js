import styled from 'styled-components'
import Button from '../../../atoms/Button'
import Text from '../../../atoms/Text'

export const StyledContainer = styled.div`
  .MuiTableCell-root {
    padding: 0.5rem 0.5rem;
  }

  .gJVPSD {
    margin: 0 auto;
  }
`

export const StyledText = styled(Text)`
  margin-bottom: -2.5rem;
`

export const StyledButton = styled(Button)`
  width: 5.75rem;
  display: inline;
  .filter {
    border-radius: 50%;
    border: 1px solid gray;
  }
`
