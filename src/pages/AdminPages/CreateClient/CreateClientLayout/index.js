import './index.styles'
import React, { useState } from 'react'
import { Button, Text } from '../../../../atoms'
import { StyledContainer, StyledLayout } from './index.styles'
import Stepper, { steps } from '../../../../atoms/StepperAdmin/StepperCreateClient'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ClientLayout = ({ children, updateRedux = () => {}, handleNext }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeStep, setActiveStep] = useState(0)

  const handleNextButton = () => {
    if (activeStep < steps.length - 1) {
      handleNext()
      setActiveStep((prevStep) => prevStep + 1)
      navigate(steps[activeStep + 1].to)
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
      <Text>Create a Client</Text>
      <Stepper step={activeStep} updateRedux={updateRedux} />
      <StyledLayout>
        <div className="content">{children}</div>
        <div className="buttons">
          {activeStep > 0 && <Button className="first" variant="outlined" label="BACK" handleClick={handleBack} />}
          {activeStep < steps.length - 1 && (
            <Button className="second" variant="contained" label="NEXT" handleClick={handleNextButton} />
          )}
        </div>
      </StyledLayout>
    </StyledContainer>
  )
}

export default ClientLayout
