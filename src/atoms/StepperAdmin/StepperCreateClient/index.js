import React from 'react'
import { Stepper as StepperComp, Step, StepLabel } from '@mui/material'
import { StyledBox } from './index.styles'
import { useLocation, useNavigate } from 'react-router-dom'

export const steps = [
  {
    active: false,
    step: 0,
    label: 'Contact Information',
    to: '/admin/jobs/clients/create-a-client/contacts',
  },
  {
    active: false,
    step: 1,
    label: 'Company Details',
    to: '/admin/jobs/clients/create-a-client/company-details',
  },
  {
    active: false,
    step: 2,
    label: 'Company Details Extra',
    to: '/admin/jobs/clients/create-a-client/company-profile',
  },
  {
    active: false,
    step: 3,
    label: 'Client List',
    to: '/admin/jobs/clients/create-list',
  },
]

const StepperCreateClient = ({ updateStep, updateRedux }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentStep = steps.findIndex((step) => step.to === location.pathname)

  const handleStepClick = (to, step) => {
    navigate(to)
    updateStep && step && updateStep(step)
    updateRedux && updateRedux()
  }

  return (
    <StyledBox>
      <StepperComp nonLinear activeStep={currentStep} orientation="horizontal">
        {steps.map((item, index) => (
          <Step completed={index < currentStep} key={item.label} onClick={() => handleStepClick(item.to, item.step)}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </StepperComp>
    </StyledBox>
  )
}

export default StepperCreateClient
