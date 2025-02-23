import LoginIndex from '.'
import Layout from '../layout'
import { StyledContainer } from './index.styles'
import Talrise from './Talrise'

const Login = () => {
  return (
    <StyledContainer>
      <Layout variant="half" componentLeft={<Talrise />} componentRight={<LoginIndex />} />
    </StyledContainer>
  )
}

export default Login
