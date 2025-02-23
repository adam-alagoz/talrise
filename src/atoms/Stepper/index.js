import { Stepper as StepperComp, Step, StepLabel } from '@mui/material'
import { useNavigate } from 'react-router'
import { StyledBox } from './index.styles'
import { useUser } from '../../redux/hooks/userHook'

const steps = [
  {
    active: false,
    step: 1,
    label: 'Personal Info',
    to: '/candidate/personal-info',
  },
  {
    active: false,
    step: 2,
    label: 'Upload CV',
    to: '/candidate/upload-cv',
  },
  {
    active: false,
    step: 3,
    label: 'Position',
    to: '/candidate/position',
  },
  {
    active: false,
    step: 4,
    label: 'Skill Set',
    to: '/candidate/skill-set',
  },
  {
    active: false,
    step: 5,
    label: 'Industry',
    to: '/candidate/industry',
  },
  {
    active: false,
    step: 6,
    label: 'Language',
    to: '/candidate/language',
  },
  {
    active: false,
    step: 7,
    label: 'Experience',
    to: '/candidate/experience',
  },
  {
    active: false,
    step: 8,
    label: 'Education',
    to: '/candidate/education',
  },
  {
    active: false,
    step: 9,
    label: 'Preferences',
    to: '/candidate/preference',
  },
]

const Stepper = ({ step, updateRedux = () => {} }) => {
  const { candidateUserInfo } = useUser()
  const candidateStatus = candidateUserInfo.candidateStatus

  const navigate = useNavigate()
  return (
    <StyledBox>
      <StepperComp nonLinear={true} activeStep={step} orientation="vertical">
        {steps.map((step) => (
          <Step
            completed={Object.values(candidateStatus)[step.step - 1]}
            key={step.label}
            onClick={() => {
              updateRedux()
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
