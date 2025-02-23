import Completed from '../../../components/Completed'
import Layout from '../../../components/GeneralComponents/layout'
import Logo from '../../../assets/png/talrise_logo.png'

function LoginVerifyEmailFailed() {
  return (
    <Layout
      componentRight={
        <Completed
          img={Logo}
          text={
            '<p>Your e-mail address has “NOT” been verified.<p><p>Please check your e-mail adress<p><p><p>Please click the link in the email to activate your account<p>'
          }
          containedNav={'/'}
        />
      }
    />
  )
}

export default LoginVerifyEmailFailed
