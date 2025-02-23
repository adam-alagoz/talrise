import Completed from '../../../components/Completed'
import Layout from '../../../components/GeneralComponents/layout'
import Logo from '../../../assets/png/talrise_logo.png'
import { useUser } from '../../../redux/hooks'

function FirstVerifyPage() {
  const { candidateUserInfo } = useUser()

  return (
    <Layout
      componentRight={
        <Completed
          img={Logo}
          text={`<p>CONFIRM YOUR EMAIL!<p><p>We have sent an email to:<p><p>
              ${candidateUserInfo.personnelInfo.email}
              <p><p>Please click the link in the email to activate your account<p>`}
          containedNav={'/'}
        />
      }
    />
  )
}

export default FirstVerifyPage
