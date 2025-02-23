import { Stepper as StepperComp, Step, StepLabel } from '@mui/material'
import { useNavigate } from 'react-router'
import { StyledBox } from './index.styles'
import { useUser } from '../../redux/hooks/userHook'
const steps = [
  { active: false, step: '1', label: 'Contact Information', to: '/client/contact' },
  { active: false, step: '2', label: 'Company Details', to: '/client/company' },
  { active: false, step: '3', label: 'Client Position', to: '/client/position' },
]

const Stepper = ({ step}) => {
  const { clientInfo } = useUser()
  const clientStatus = clientInfo?.clientStatus
  const navigate = useNavigate()
  return (
    <StyledBox>
      <StepperComp activeStep={step} orientation="vertical">
        {steps.map((step) => (
          <Step
            completed={Object.values(clientStatus ?? {})?.[step.step - 1]}
            key={step.label}
            onClick={() => {
              navigate(step.to)
            }}
          >
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </StepperComp>
    </StyledBox>
  )
}
export default Stepper
