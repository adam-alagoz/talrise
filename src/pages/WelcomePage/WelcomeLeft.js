import { LeftContainer } from './index.styles'
import welcomeImage from '../../assets/svg/welcome.svg'
import talriseImage from '../../assets/svg/talrise_newLogo.svg'

const WelcomeLeft = () => {
  return (
    <LeftContainer>
      <div>
        <img src={talriseImage} alt="talrise new logo" className="talrise" />
        <img src={welcomeImage} alt="welcome img" className="welcome" />
      </div>
    </LeftContainer>
  )
}

export default WelcomeLeft
