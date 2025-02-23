import { StyledButtonBody, StyledButtonCancel, StyledButtonSave } from './index.styles'

function Button() {
  return (
    <StyledButtonBody>
      <StyledButtonCancel className="cancel" variant="contained">
        CANCEL
      </StyledButtonCancel>
      <StyledButtonSave className="save" variant="contained" onClick={() => console.log('save')}>
        SAVE
      </StyledButtonSave>
    </StyledButtonBody>
  )
}

export default Button
