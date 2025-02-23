import { useNavigate } from 'react-router-dom'
import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Industry from './Industry'
import Stepper from '../../../atoms/Stepper'
import 'react-toastify/dist/ReactToastify.css'
import { useIndustryHook } from '../../../utils/formikHooks/industryFormik'
import { useUser } from '../../../redux/hooks'
const IndustryPage = () => {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const navigate = useNavigate()
  const { formik, selectList, suggestedList } = useIndustryHook()

  const updateRedux = () => {
    addCandidateUserInfo({ ...candidateUserInfo, industries: [...formik.values.addedItemsFormik] })
  }
  const nextButtonClick = () => {
    updateRedux()
    formik.handleSubmit()
  }

  const backButtonClick = () => {
    updateRedux()
    navigate('/candidate/skill-set')
  }
  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentLeft={<Stepper step={4} updateRedux={updateRedux} />}
        componentRight={
          <Industry formik={formik} selectList={selectList} suggestedList={suggestedList} />
        }
        nextButtonClick={nextButtonClick}
        backButtonClick={backButtonClick}
        exitButtonVisible={true}
      />
    </StyledContainer>
  )
}

export default IndustryPage
