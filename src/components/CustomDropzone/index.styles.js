import styled from 'styled-components'
import { Button } from '../../atoms'
import Text from '../../atoms/Text'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 0.125rem dashed rgba(0, 0, 0, 0.4);
  outline: none;
  transition: border 0.24s ease-in-out;
  border-radius: 17px;
  cursor: pointer;
  margin-bottom: 20px;

  .file-name {
    margin-bottom: 4px;
  }
`

export const AtomicButton = styled(Button)`
  margin-bottom: 20px;
  width: 165px;
  cursor: pointer;
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const StyledText = styled(Text)`
  margin: 0rem 0rem 1.25rem;
  display: flex;
  justify-content: space-between;
`

export const StyledContainer = styled.div`
  margin: 20px 20px;
`
