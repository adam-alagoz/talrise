import { forwardRef } from 'react'
import { StyledContainer, StyledForm, StyledWrapper } from './index.styles'
import { Text } from '../../../../atoms'
import ExperienceForm from '../ExperienceForm'
import 'react-toastify/dist/ReactToastify.css'

const Experiences = forwardRef((props, ref) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Text className="experience-headline" type="Headline2">
          Experience
        </Text>
        <Text className="experience-subtitle" type="Subtitle1">
          Please add your work experience.
        </Text>
      </StyledContainer>
      <StyledForm onSubmit={props.formik.handleSubmit}>
        <ExperienceForm formik={props.formik} />
        <button ref={ref} style={{ display: 'none' }}></button>
      </StyledForm>
    </StyledWrapper>
  )
})

export default Experiences
