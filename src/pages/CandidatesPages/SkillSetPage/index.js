import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import SkillSet from './SkillSet'
import { useNavigate } from 'react-router-dom'
import { useSkillSetHook } from '../../../utils/formikHooks/skillSetFormik'
import Stepper from '../../../atoms/Stepper'
import 'react-toastify/dist/ReactToastify.css'
import { useUser } from '../../../redux/hooks'

const SkillSetPage = () => {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const navigate = useNavigate()
  const { formik, selectList, suggestedList, positionData } = useSkillSetHook()

  const updateRedux = () => {
    addCandidateUserInfo({ ...candidateUserInfo, skills: [...formik.values.addedItemsFormik] })
  }
  const nextButtonClick = () => {
    updateRedux()
    formik.handleSubmit()
  }

  const backButtonClick = () => {
    updateRedux()
    navigate('/candidate/position')
  }
  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentLeft={<Stepper step={3} updateRedux={updateRedux} />}
        componentRight={
          <SkillSet
            formik={formik}
            selectList={selectList}
            suggestedList={suggestedList}
            positionData={positionData}
          />
        }
        nextButtonClick={nextButtonClick}
        backButtonClick={backButtonClick}
        exitButtonVisible={true}
      />
    </StyledContainer>
  )
}

export default SkillSetPage
