import { useState, Fragment, useEffect } from 'react'
import Box from '@mui/material/Box'
import Contacts from '../../ClientPages/ContactInformationPage/Contacts'
import Company from '../../ClientPages/CompanyDetailsPage/Company'
import CompanyDetailsExtra from './CompanyDetailsExtra'
import Button from '../../../atoms/Button'
import { StyledContainer, StyledComponentContainer } from './index.styles'
import { useCompanyContactInfoHook } from '../../../utils/formikHooks/clientFormikHooks/companyContactInfoFormik'
import { useCompanyDetailsHook } from '../../../utils/formikHooks/clientFormikHooks/companyDetailsFormik'
import { useCompanyProfileHook } from '../../../utils/formikHooks/clientFormikHooks/companyProfileFormik'
import ClientListTable from './ClientListTable'
import { Text } from '../../../atoms'
import { useUser } from '../../../redux/hooks'

export default function CreateClient() {
  const { addClientId } = useUser()
  const [activeStep, setActiveStep] = useState(0)
  const { formik: companyInfoFormik, clientId, isSuccess: isSuccCI } = useCompanyContactInfoHook(true)

  const { formik: companyDetailsFormik, isSuccess: isSuccCD } = useCompanyDetailsHook(true, clientId)

  const { formik: companyProfileFormik, isSuccess: isSuccCP } = useCompanyProfileHook(true, clientId)
  const steps = [
    {
      label: 'Contact Information',
      component: <Contacts formik={companyInfoFormik} />,
      formik: companyInfoFormik,
    },
    {
      label: 'Company Details',
      component: <Company formik={companyDetailsFormik} />,
      formik: companyDetailsFormik,
    },
    {
      label: 'Company Details - Extra',
      component: <CompanyDetailsExtra formik={companyProfileFormik} />,
      formik: companyProfileFormik,
    },
  ]

  const handleNext = () => {
    steps[activeStep].formik.validateForm().then((error) => {
      if (Object.keys(error).length === 0) {
        steps[activeStep].formik.handleSubmit()
        return
      }
    })
  }

  useEffect(() => {
    if (isSuccCI || isSuccCD || isSuccCP) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      addClientId(clientId)
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccCI, isSuccCD, isSuccCP])

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Fragment>
      <Text type="Headline1" className="headline">
        Create a Client
      </Text>
      <StyledContainer>
        {activeStep === steps.length ? (
          <ClientListTable />
        ) : (
          <Fragment>
            <StyledComponentContainer>{steps[activeStep].component}</StyledComponentContainer>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}>
              {activeStep === 0 ? (
                <div></div>
              ) : (
                <Button variant="contained" className="button prev-button" handleClick={handleBack} label="BACK"></Button>
              )}
              <Button
                variant="contained"
                className="button next-button"
                handleClick={handleNext}
                label={activeStep === steps.length - 1 ? 'FINISH' : 'NEXT'}
              ></Button>
            </Box>
          </Fragment>
        )}
      </StyledContainer>
    </Fragment>
  )
}
