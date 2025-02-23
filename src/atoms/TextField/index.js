import { useState, forwardRef } from 'react'
import { StyledFormControl, StyledTextField } from './index.styles'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { IconButton, InputAdornment } from '@mui/material'
import NumberFormat from 'react-number-format'

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      thousandSeparator
      isNumericString
    />
  )
})

const TextField = ({
  type = 'text',
  name,
  label,
  mainClass,
  className,
  defaultValue,
  variant,
  endAdornment,
  color = 'secondary',
  helperText,
  error,
  autoComplete,
  placeholder,
  inputComponent,
  multiline,
  rows,
  ...restProps
}) => {
  const [isVisible, setIsVisible] = useState(type === 'password' ? false : true)
  const handleClickShowPassword = () => {
    setIsVisible(!isVisible)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const ButtonIcon = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {isVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
      </IconButton>
    </InputAdornment>
  )
  const getType = () => {
    if (type === 'password' && !isVisible) return 'password'
    if (type === 'password' && isVisible) return 'text'
    return type
  }

  return (
    <StyledFormControl className={mainClass} variant="outlined">
      <StyledTextField
        className={className}
        name={name}
        type={getType()}
        label={label}
        defaultValue={defaultValue}
        variant={variant}
        color={color}
        InputProps={{
          endAdornment: type === 'password' ? ButtonIcon : endAdornment,
          inputComponent: type === 'salary' ? NumberFormatCustom : inputComponent,
        }}
        helperText={helperText}
        error={error}
        autoComplete={autoComplete}
        placeholder={label ? '' : placeholder}
        {...restProps}
        multiline={multiline}
        rows={rows}
      />
    </StyledFormControl>
  )
}

export default TextField
