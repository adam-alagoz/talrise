
import { StyledButton } from './index.style'
import { theme } from '../../styles/Colors'

const buttonTypesWithStyles = {
  contained: {
    backgroundColor: theme.primary,
    color: theme.white,
    borderRadius: '5px',
    border: '2px solid',
  },

  contained_disabled: {
    backgroundColor: theme.primary300,
    color: theme.white,
    borderRadius: '5px',
    border: '2px solid',
  },

  text: {
    backgroundColor: 'transparent',
    color: theme.primary,
    borderRadius: null,
    border: 'none',
  },
  outlined: {
    backgroundColor: theme.white,
    color: theme.primary,
    borderRadius: '5px',
    border: `1px solid ${theme.border}`,
  },
}
export default function Button({ label, className, type, icon, variant, handleClick, disabled }) {
  return (
    <StyledButton
      className={className}
      variant={buttonTypesWithStyles[variant]}
      type={type}
      icon={icon}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon}
      <span>{label}</span>
    </StyledButton>
  )
}
