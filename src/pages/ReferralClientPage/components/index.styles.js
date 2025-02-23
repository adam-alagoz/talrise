import styled from 'styled-components'
import { Button } from '../../../atoms'

export const StyledWrapper = styled.div`
  margin-top: 1.25rem;
  padding: 1.875rem 3.75rem 7.8125rem;
  background-color: ${(p) => p.theme.colors.white};
  position: relative;
`
export const StyledForm = styled.form`
  padding-top: 0.9375rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  .formContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    grid-template-rows: 1fr;
  }
  .nameContainer,
  .phoneContainer,
  .locationContainer {
    display: flex;
    gap: 1rem;
  }
  .referClientButton {
    position: absolute;
    bottom: 3.125rem;
    right: 3.75rem;
  }
`
export const StyledColumn = styled.div`
  display: grid;
  gap: 1rem;
`
export const StyledContainer = styled.div``
export const StyledAtomicButton = styled(Button)`
  height: 2.5rem;
  width: 5rem;
  :hover {
    cursor: pointer;
  }
`
