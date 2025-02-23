import Layout from '../../components/GeneralComponents/layout'
import LoadingPage from './LoadingPage'

const Loading = ({ loadingText }) => {
  return <Layout componentRight={<LoadingPage loadingText={loadingText} />} />
}

export default Loading
