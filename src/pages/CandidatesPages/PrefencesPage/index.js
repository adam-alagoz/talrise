import Layout from '../../../components/GeneralComponents/layout'
import { useNavigate } from 'react-router'
import Preferences from './Preferences'
import Stepper from '../../../atoms/Stepper'
import 'react-toastify/dist/ReactToastify.css'
import { usePreferencesHook } from '../../../utils'
import { useUser } from '../../../redux/hooks'

const PreferencesPage = () => {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const { formik, initialCityWorkTypes } = usePreferencesHook()
  const navigate = useNavigate()

  const updateRedux = () => {
    addCandidateUserInfo({ ...candidateUserInfo, preferences: { ...formik.values } })
  }

  return (
    <Layout
      variant="progressBar"
      componentLeft={<Stepper updateRedux={updateRedux} step={8} />}
      componentRight={<Preferences formik={formik} initialValues={initialCityWorkTypes} />}
      nextButtonClick={() => {
        updateRedux()
        formik.handleSubmit()
      }}
      backButtonClick={() => {
        updateRedux()
        navigate('/candidate/education')
      }}
      exitButtonVisible={true}
    />
  )
}

export default PreferencesPage
