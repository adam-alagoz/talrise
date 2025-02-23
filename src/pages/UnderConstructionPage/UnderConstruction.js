import { StyledContainer, AtomicButton, StyledImage, StyledText } from './index.styles'
import underConstructionImg from '../../assets/svg/underConstruction.svg'
import { useNavigate } from 'react-router-dom'

const UnderConstruction = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    const activeRole = localStorage.getItem('activeRole')
    if (activeRole === 'SUPER_ADMIN') {
      navigate('/admin/dashboard')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <StyledContainer>
      <StyledImage src={underConstructionImg} />
      <StyledText display="block" className="text-404" type="Body1">
        Our page is <span>under construction</span>
        <p> It will be completed as soon as possible, please go to the Dashboard via the link below.</p>
      </StyledText>
      <AtomicButton variant="contained" type="submit" handleClick={handleClick} label="DASHBOARD" />
    </StyledContainer>
  )
}
export default UnderConstruction
