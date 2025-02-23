import styled from 'styled-components'
import { theme } from '../../styles/Colors'

export const StyledButton = styled.button`
  width: 100%;
  color: ${({ variant: { color } }) => color};
  padding: 0.5em 1em;
  border: ${({ variant: { border } }) => border};
  border-radius: ${({ variant: { borderRadius } }) => borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant: { backgroundColor } }) => backgroundColor};
  font-family: 'DM Sans';
  cursor: pointer;
  span {
    margin-left: ${({ icon }) => icon && '10px'};
    text-transform: uppercase;
  }
`
StyledButton.defaultProps = {
  variant: {
    backgroundColor: theme.white,
    color: theme.primary,
    borderRadius: '5px',
    border: `1px solid ${theme.border}`,
  },
}
