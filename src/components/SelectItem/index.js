import { InputLabel, MenuItem, FormHelperText } from '@mui/material'
import { StyledSelect, StyledFormControl } from './index.styles'

const SelectItem = ({
  className,
  labelId = 'select-label-id',
  inputId = 'select-input-id',
  label,
  name,
  disabled,
  menuItems,
  defaultValue,
  value,
  handleChange,
  multiple,
  error,
  helperText,
  noneOption = false,
  MenuProps,
  onClick,
  isName,
}) => {
  if (value !== 'None' && !!value && !menuItems) return

  return (
    <StyledFormControl className={className} error={error}>
      <InputLabel id={labelId} color="secondary" sx={{ fontSize: '1rem', fontFamily: 'DM Sans' }}>
        {label}
      </InputLabel>
      <StyledSelect
        multiple={multiple ?? false}
        labelId={labelId}
        id={`${name}-${inputId}`}
        name={name}
        label={label}
        disabled={disabled}
        value={value}
        onClick={onClick}
        onChange={handleChange}
        color="secondary"
        defaultValue={defaultValue}
        error={error}
        MenuProps={MenuProps}
        sx={{ fontSize: '1rem', fontFamily: 'DM Sans' }}
      >
        {noneOption === true && (
          <MenuItem value="" sx={{ fontSize: '1rem', fontFamily: 'DM Sans' }}>
            <em>None</em>
          </MenuItem>
        )}
        {menuItems?.map((item, index) => (
          <MenuItem key={index} value={isName ? item.name : item.id} sx={{ fontSize: '1rem', fontFamily: 'DM Sans' }}>
            {item.name}
          </MenuItem>
        ))}
      </StyledSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  )
}

export default SelectItem
