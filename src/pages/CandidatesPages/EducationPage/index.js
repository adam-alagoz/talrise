import React, { useRef } from 'react'
import Layout from '../../../components/GeneralComponents/layout'
import Education from './components/Education'
import { StyledContainer } from './index.styles'
import { useNavigate } from 'react-router'
import Stepper from '../../../atoms/Stepper'
import { useUser } from '../../../redux/hooks'
import { useEducationHook } from '../../../utils/formikHooks/educationsFormik'
import { isEqual } from 'lodash'
import { toast } from 'react-toastify'
const EducationPage = () => {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const { formik, initialEducationValues } = useEducationHook()
  const updateRedux = () => {
    addCandidateUserInfo({ ...candidateUserInfo, educations: { ...formik.values } })
  }
  const navigate = useNavigate()
  const ref = useRef()
  const handleSubmit = () => {
    updateRedux()
    ref.current.click()
  }
  const isValidForm = (values) => {
    return (
      values.educations.length &&
      values.educations[0].universityId &&
      values.educations[0].degreeId &&
      values.educations[0].departmentId &&
      values.educations[0].startYear
    )
  }
  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentRight={<Education formik={formik} ref={ref} />}
        componentLeft={<Stepper updateRedux={updateRedux} step={7} />}
        nextButtonClick={() => {
          if (isEqual(formik.values.educations.at(-1), initialEducationValues)) {
            toast.error('Please complete or remove empty forms before progressing.')
          } else {
            handleSubmit()
            if (isValidForm(formik.values)) {
              navigate('/candidate/preference')
            }
          }
        }}
        backButtonClick={() => {
          updateRedux()
          navigate('/candidate/experience')
        }}
        exitButtonVisible={true}
      />
    </StyledContainer>
  )
}

export default EducationPage
