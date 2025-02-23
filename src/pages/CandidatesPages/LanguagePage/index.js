import { useNavigate } from 'react-router-dom'
import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Language from './Language'
import Stepper from '../../../atoms/Stepper'
import { useLanguageHook } from '../../../utils/formikHooks/languageFormik'
import { useUser } from '../../../redux/hooks'
const LanguagePage = () => {
  const navigate = useNavigate()
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const { formik, selectList, suggestedList } = useLanguageHook()

  const updateRedux = () => {
    addCandidateUserInfo({ ...candidateUserInfo, languages: [...formik.values.addedItemsFormik] })
  }
  const nextButtonClick = () => {
    updateRedux()
    formik.handleSubmit()
  }

  const backButtonClick = () => {
    updateRedux()
    navigate('/candidate/industry')
  }
  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentLeft={<Stepper step={5} updateRedux={updateRedux} />}
        componentRight={
          <Language formik={formik} selectList={selectList} suggestedList={suggestedList} />
        }
        nextButtonClick={nextButtonClick}
        backButtonClick={backButtonClick}
        exitButtonVisible={true}
      />
    </StyledContainer>
  )
}

export default LanguagePage
