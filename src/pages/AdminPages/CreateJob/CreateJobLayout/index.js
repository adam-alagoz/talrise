import './index.styles'
import Button from '../../../../atoms/Button'
import { Text } from '../../../../atoms'
import { StyledContainer, StyledLayout } from './index.styles'
import { useNavigate, useLocation } from 'react-router-dom'
import Stepper, { steps } from '../../../../atoms/StepperAdmin'
import { useState, useEffect } from 'react'

const Layout = ({ children, updateRedux = () => {}, handleNext, isHideNextButton = false }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeStep, setActiveStep] = useState(0)
  const {
    positionId,
    employmentTypeId,
    jobTitle,
    countryId,
    cityId,
    expectedClosureDate,
    expectedStartDate,
    contractTypeId,
    salaryAmountId,
    salaryPreferenceId,
    currencyId,
    workPlaceIds,
    languageIds,
  } = children.props.formik?.values || {};

  const handleNextButton = () => {
    if (activeStep < steps.length - 1) {
      handleNext()
      if (
        positionId &&
        employmentTypeId &&
        jobTitle &&
        countryId &&
        cityId &&
        expectedClosureDate &&
        expectedStartDate &&
        contractTypeId &&
        salaryAmountId &&
        salaryPreferenceId &&
        currencyId &&
        workPlaceIds &&
        languageIds
      ) {
        setActiveStep((prevStep) => prevStep + 1)
        navigate(steps[activeStep + 1].to)
      }
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1)
      navigate(steps[activeStep - 1].to)
    }
  }

  useEffect(() => {
    const currentStep = steps.findIndex((step) => step.to === location.pathname)
    setActiveStep(currentStep)
  }, [location.pathname])

  return (
    <StyledContainer>
      <Text>Create a Job</Text>

      <Stepper step={activeStep} updateRedux={updateRedux} />

      <StyledLayout>
        <div className="content">{children}</div>

        <div className="buttons">
          {activeStep > 0 && <Button className="first" variant="outlined" label="BACK" handleClick={handleBack} />}
          {activeStep < steps.length - 1 && !isHideNextButton && (
            <Button className="second" variant="contained" label="NEXT" handleClick={handleNextButton} />
          )}
        </div>
      </StyledLayout>
    </StyledContainer>
  )
}

export default Layout
