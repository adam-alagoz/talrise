import Layout from '../../../components/GeneralComponents/layout'
import ChooseRole from './components/ChooseRole'
import Info from './components/Info/index'

const ChooseRolePage = () => (
  <Layout isLogoNavigate={false} variant="half" componentRight={<ChooseRole />} componentLeft={<Info />} />
)

export default ChooseRolePage
