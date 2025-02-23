import { StyledFormContainer, StyledCheckBoxContainer } from './index.styles'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { Text } from '../../../atoms'

const GraduationInfo = ({ formik }) => {
  return (
    <StyledFormContainer>
      <StyledCheckBoxContainer>
        <FormGroup
        visible='false'
        >
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={formik.values.isStudent}
                disabled={formik.values.isNewGraduate}
                value={formik.values.isStudent}
              />
            }
            label={
              <Text className="experience-stillWorking-text" type="Caption">
                I am a student.
              </Text>
            }
            name="isStudent"
            onChange={formik.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={formik.values.isNewGraduate}
                disabled={formik.values.isStudent}
                value={formik.values.isNewGraduate}
              />
            }
            label={
              <Text className="experience-stillWorking-text" type="Caption">
                I am a recent graduate.
              </Text>
            }
            name="isNewGraduate"
            onChange={formik.handleChange}
          />
        </FormGroup>
      </StyledCheckBoxContainer>
    </StyledFormContainer>
  )
}

export default GraduationInfo
