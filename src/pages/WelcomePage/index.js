import WelcomeRight from './WelcomeRight'
import WelcomeLeft from './WelcomeLeft'
import { BodyContainer, StyledContainer } from './index.styles'
import Footer from '../../components/Footer'

const WelcomePage = () => {
  return (
    <StyledContainer>
      <BodyContainer>
        <WelcomeLeft />
        <WelcomeRight />
      </BodyContainer>
      <Footer />
    </StyledContainer>
  )
}

export default WelcomePage
