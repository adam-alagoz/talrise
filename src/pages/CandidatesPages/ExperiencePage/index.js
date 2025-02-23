import React, { useRef } from 'react'
import Layout from '../../../components/GeneralComponents/layout'
import Experiences from './Experiences'
import { StyledContainer } from './index.styles'
import { useNavigate } from 'react-router-dom'
import Stepper from '../../../atoms/Stepper'
import { useExperienceHook } from '../../../utils'
import { useUser } from '../../../redux/hooks'

const ExperiencePage = () => {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const { formik } = useExperienceHook()

  const updateRedux = () => {
    addCandidateUserInfo({
      ...candidateUserInfo,
      experiences: [...formik.values.experiences],
      isNewGraduate: formik.values.isNewGraduate,
      isStudent: formik.values.isStudent,
    })
  }
  const navigate = useNavigate()
  const ref = useRef()

  const handleSubmit = () => {
    updateRedux()
    ref.current.click()
  }
  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentRight={<Experiences formik={formik} ref={ref} />}
        componentLeft={<Stepper updateRedux={updateRedux} step={6} />}
        nextButtonClick={() => {
          handleSubmit()
        }}
        backButtonClick={() => {
          updateRedux()
          navigate('/candidate/language')
        }}
        exitButtonVisible={true}
      />
    </StyledContainer>
  )
}

export default ExperiencePage
