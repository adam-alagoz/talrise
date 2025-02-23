import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Join from './JoinPage'
import SignUp from './SignUpPage/SignUp'

const RegisterPage = () => {
  return (
    <StyledContainer>
      <Layout variant="half" componentLeft={<Join />} componentRight={<SignUp />} />
    </StyledContainer>
  )
}

export default RegisterPage
