import ForgotPassword from './ForgotPassword'
import Layout from '../../../components/GeneralComponents/layout'
import Talrise from './Talrise'

const ForgotPasswordPage = () => {
  return <Layout variant="half" componentLeft={<Talrise />} componentRight={<ForgotPassword />} />
}

export default ForgotPasswordPage
