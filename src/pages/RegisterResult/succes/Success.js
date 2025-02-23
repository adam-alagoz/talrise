import Completed from '../../../components/Completed/index'
import Frame from '../../../assets/svg/Frame.svg'
import { useUser } from '../../../redux/hooks'

const Success = () => {
  const text = `<p>Thank you for joining Talrise !<br/>
We have activated your account.<br/><br/>
Have a good day.
<p>`

  const { userInfo: user } = useUser()
  const nav = user?.roles?.some((item) => item === 'CANDIDATE') ? '/candidate/personal-info' : '/client/contact'
  const nav2 = user?.roles?.some((item) => item === 'CANDIDATE') ? '/candidate/dashboard' : '/client/dashboard'

  return (
    <Completed
      img={Frame}
      text={text}
      containedLabel="COMPLETE MY PROFILE NOW"
      containedNav={nav}
      outlinedLabel="COMPLETE LATER"
      outlinedNav={nav2}
    />
  )
}

export default Success
