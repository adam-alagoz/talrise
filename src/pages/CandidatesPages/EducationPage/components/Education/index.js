import {forwardRef} from 'react'
import { Text } from '../../../../../atoms'
import { Container, StyledContainer, StyledForm } from './index.styles'

import EducationInfo from "../../../EducationPage/components/EducationInfo"
import CertificateInfo from '../CertificateInfo'
import 'react-toastify/dist/ReactToastify.css'

const Education = forwardRef((props, ref) => {
  return (
    <Container className="generalContainer">
      <StyledContainer className="educationInfo">
        <StyledContainer className="texts">
          <Text className="text-example" type="Headline2">
            Education
          </Text>
          <Text className="text-example" type="Subtitle1">
            Please add all the degrees you have.
          </Text>
        </StyledContainer>
        <StyledContainer className="form-container">
          <StyledForm onSubmit={props.formik.handleSubmit}>
            <EducationInfo formik={props.formik} />
            <CertificateInfo formik={props.formik} />
            <button type="submit" ref={ref} style={{ display: 'none' }}></button>
          </StyledForm>
        </StyledContainer>
      </StyledContainer>
    </Container>
  )
})

export default Education
