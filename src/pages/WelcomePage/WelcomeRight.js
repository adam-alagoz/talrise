import React from 'react'
import { AtomicButton, RightContainer } from './index.styles'
import talriseRightImage from '../../assets/svg/talrise_newLogo.svg'
import { useNavigate } from 'react-router'

const WelcomeRight = () => {
  const navigate = useNavigate()

  return (

    <RightContainer>
      <img src={talriseRightImage} alt="talrise" className="rightImage" />
      <p className="rightText">You are invited to join TALRISE by 'User'</p>
      <AtomicButton variant="contained" type="submit" handleClick={() => {
          navigate('/register')
        }} label="JOIN US" />
    </RightContainer>
  )
}

export default WelcomeRight
