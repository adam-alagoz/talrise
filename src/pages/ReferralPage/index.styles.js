import styled from 'styled-components'
import Button from '../../atoms/Button'

export const StyledContainer = styled.div`
  .MTableToolbar-root-5 {
    display: flex;
    flex-direction: row-reverse;
    align-self: flex-end;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 0.3125rem;
  }
  .MTableToolbar-searchField-10 {
    border: 1px solid gray;
    width: 35%;
  }
`
export const AtomicButton = styled(Button)`
  cursor: pointer;
  height: 40px;
  border-radius: 0.3125rem;
`
