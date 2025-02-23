import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Join from '../RegisterPage/JoinPage'
import TermsAndConditions from './TermsAndConditions'

const RegisterPage = () => {
  
  return (
    <StyledContainer>
      <Layout variant="half" componentLeft={<Join />} componentRight={<TermsAndConditions />} />
    </StyledContainer>
  )
}

export default RegisterPage