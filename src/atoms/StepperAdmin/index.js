import { Stepper as StepperComp, Step, StepLabel } from '@mui/material'
import { useNavigate, useLocation } from 'react-router'
import { StyledBox } from './index.styles'

export const steps = [
  { active: false, step: 0, label: 'Basics', to: '/admin/jobs/create-jobs/create-a-job/basics' },
  {
    active: false,
    step: 1,
    label: 'Details',
    to: '/admin/jobs/create-jobs/create-a-job/details',
  },
  {
    active: false,
    step: 2,
    label: 'Role Responsibility',
    to: '/admin/jobs/create-jobs/create-a-job/role-responsibility',
  },
  {
    active: false,
    step: 3,
    label: 'Interview Process',
    to: '/admin/jobs/create-jobs/create-a-job/interview-process',
  },
  {
    active: false,
    step: 4,
    label: 'Benefits',
    to: '/admin/jobs/create-jobs/create-a-job/benefits',
  },
  {
    active: false,
    step: 5,
    label: 'Job Summary',
    to: '/admin/jobs/create-jobs/create-a-job/job-summary',
  },
  {
    active: false,
    step: 6,
    label: 'View Shortlist',
    to: '/admin/jobs/create-jobs/jobs-list',
  },
]

const StepperAdmin = ({ updateStep, updateRedux }) => {
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
          <Step
            completed={index < currentStep}
            key={item.label}
            onClick={() => handleStepClick(item.to, item.step)}
          >
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </StepperComp>
    </StyledBox>
  )
}

export default StepperAdmin
