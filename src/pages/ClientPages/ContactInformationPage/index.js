import React, { useRef } from 'react'
import Layout from '../../../components/GeneralComponents/layout'
import Contacts from './Contacts'
import { StyledContainer } from './index.styles'
import { useNavigate } from 'react-router-dom'
import StepperClient from '../../../atoms/StepperClient'
import { useCompanyContactInfoHook } from '../../../utils/formikHooks/clientFormikHooks/companyContactInfoFormik'

const ContactInformationPage = () => {
  const navigate = useNavigate()
  const ref = useRef()
  const { formik: companyInfoFormik } = useCompanyContactInfoHook(false, null, true)
  const handleSubmit = () => {
    ref.current.click()
  }

  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentRight={<Contacts ref={ref} formik={companyInfoFormik} />}
        componentLeft={<StepperClient step={0} />}
        nextButtonClick={() => handleSubmit()}
        backButtonClick={() => navigate(-1)}
      />
    </StyledContainer>
  )
}

export default ContactInformationPage
