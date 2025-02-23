import ResetPassword from './ResetPassword'
import Layout from '../../../components/GeneralComponents/layout'
import Talrise from './Talrise'

const ResetPasswordPage = () => {
  return <Layout variant="half" componentLeft={<Talrise />} componentRight={<ResetPassword />} />
}

export default ResetPasswordPage
