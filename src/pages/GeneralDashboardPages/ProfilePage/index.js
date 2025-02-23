import Accordion from './Accordion'
import ProfileInfo from './ProfileInfo'
import { Text } from '../../../atoms'
import { BsEyeFill } from 'react-icons/bs'
import { StyledContainer } from './index.styles'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Text>
        Profile
      </Text>
      <ProfileInfo />
      <StyledContainer>
        <Button
          className="download-pdf layout-button layout-save"
          variant="contained"
          type="submit"
          onClick={() => navigate('/preview-cv')}
          startIcon={<BsEyeFill />}
        >
          OVERVIEW
        </Button>
        <Accordion />
      </StyledContainer>
    </>
  )
}

export default ProfilePage
