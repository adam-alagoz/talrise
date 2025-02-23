import styled from 'styled-components'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'


export const StyledContainer = styled.div`
  padding: 3.125rem .5rem;
  position: relative;

  .icon {
    font-size: small;
  }
`

export const StyledText = styled(Text)`
  margin: 0rem 0rem 1.25rem;
  display: flex;
  justify-content: space-between;

  .header {
    margin-bottom: 0.3125rem;
  }
`

export const AtomicButton = styled(Button)`
    margin-bottom:20px;
    width:165px;    
    cursor:pointer;  
`

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

export const DropzonesContainer = styled.div`
  margin-bottom: 40px;
`

