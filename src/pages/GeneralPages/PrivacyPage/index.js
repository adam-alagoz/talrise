import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Join from '../RegisterPage/JoinPage'
import PrivacyPolicy from '../PrivacyPage/PrivacyPolicy'

const RegisterPage = () => {
  return (
    <StyledContainer>
      <Layout variant="half" componentLeft={<Join />} componentRight={<PrivacyPolicy />} />
    </StyledContainer>
  )
}

export default RegisterPage