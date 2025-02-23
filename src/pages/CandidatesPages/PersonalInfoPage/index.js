import { usePersonalInfoHook } from '../../../utils/formikHooks/personalInfoFormik'
import Stepper from '../../../atoms/Stepper'
import Layout from '../../../components/GeneralComponents/layout'
import Personal from './Personal'
import { useNavigate } from 'react-router'
import { useUser } from '../../../redux/hooks/userHook'

const PersonalPage = () => {
  const { candidateUserInfo, addCandidateUserInfo } = useUser()
  const navigate = useNavigate()
  const { formik, handleSubmit } = usePersonalInfoHook()
  const updateRedux = () => {
    addCandidateUserInfo({
      ...candidateUserInfo,
      personnelInfo: { ...formik.values },
    })
  }

  const nextButtonClick = () => {
    updateRedux()
    Object.keys(formik.errors).length === 0 && handleSubmit(formik.values)
  }

  const backButtonClick = () => {
    updateRedux()
    navigate(-1)
  }
  return (
    <Layout
      variant="progressBar"
      componentLeft={<Stepper step={0} updateRedux={updateRedux} />}
      componentRight={<Personal formik={formik} />}
      buttonIsNotVisible={true}
      nextButtonClick={nextButtonClick}
      backButtonClick={backButtonClick}
      exitButtonVisible={true}
    />
  )
}

export default PersonalPage
