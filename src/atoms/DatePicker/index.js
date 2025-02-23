import { StyledFormControl, StyledDatePicker } from './index.styles'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StyledTextField } from './index.styles'

const DatePicker = ({
  id = 'date-picker-input',
  name,
  label,
  color,
  inputFormat = 'DD/MM/YYYY',
  mainClass,
  className,
  views,
  openTo,
  onChange,
  renderInput,
  helperText,
  error,
  value,
  autoComplete,
  ...restProps
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledFormControl className={mainClass} variant="outlined">
        <StyledDatePicker
          className={className}
          name={name}
          id={id}
          label={label}
          value={value}
          inputFormat={inputFormat}
          displayStaticWrapperAs="desktop"
          views={views}
          openTo={openTo}
          onChange={onChange}
          InputProps={{ sx: { height: '3.25rem' } }}
          renderInput={(params) => {
            return (
              <StyledTextField
                {...params}
                helperText={helperText}
                error={error}
                autoComplete={autoComplete ? autoComplete : ""}
                color={color}
              />
            )
          }}
          {...restProps}
        />
      </StyledFormControl>
    </LocalizationProvider>
  )
}

export default DatePicker
