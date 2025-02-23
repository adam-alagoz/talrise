import { useParams } from 'react-router-dom'
import Success from './succes/Success'
import Unsuccess from './unsucces/Unsuccess'
import Layout from '../../components/GeneralComponents/layout'

const RegisterResult = () => {
  const { result } = useParams()
  return <Layout componentRight={result === 'success' ? <Success /> : <Unsuccess />} />
}

export default RegisterResult
