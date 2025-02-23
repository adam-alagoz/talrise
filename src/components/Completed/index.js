import { StyledContainer, StyledImage, StyledBottomImage, AtomicButton, StyledText } from './index.style'
import { useNavigate } from 'react-router-dom'
import BottomLogo from '../../assets/svg/talrise_newLogo.svg'

const CompletedPage = ({ img, text, outlinedLabel, outlinedNav, containedLabel, containedNav }) => {
  const navigate = useNavigate()

  return (
    <StyledContainer>
      <StyledImage src={img} />
      <StyledText display="block" className="StyledText-unsuccess" type="Body1">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </StyledText>
      {containedLabel && containedNav && (
        <AtomicButton variant="contained" type="submit" handleClick={() => navigate(containedNav)} label={containedLabel} />
      )}
      {outlinedLabel && outlinedNav && (
        <AtomicButton variant="outlined" type="submit" handleClick={() => navigate(outlinedNav)} label={outlinedLabel} />
      )}
      <StyledBottomImage src={BottomLogo} />
    </StyledContainer>
  )
}
export default CompletedPage
