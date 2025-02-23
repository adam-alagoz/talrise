import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Positions from './Positions'
import Stepper from '../../../atoms/Stepper'
import { useNavigate } from 'react-router-dom'
import { usePositionsHook } from '../../../utils/formikHooks/positionsFormik'
import { useUser } from '../../../redux/hooks'
const PositionsPage = () => {
  const { addCandidateUserInfo, candidateUserInfo } = useUser()
  const navigate = useNavigate()
  const { formik, selectList, suggestedList } = usePositionsHook()

  const updateRedux = () => {
    addCandidateUserInfo({ ...candidateUserInfo, positions: [...formik.values.addedItemsFormik] })
  }
  const nextButtonClick = () => {
    updateRedux()
    formik.handleSubmit()
  }

  const backButtonClick = () => {
    updateRedux()
    navigate('/candidate/upload-cv')
  }

  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentLeft={<Stepper step={2} updateRedux={updateRedux} />}
        componentRight={
          <Positions formik={formik} selectList={selectList} suggestedList={suggestedList} />
        }
        nextButtonClick={nextButtonClick}
        backButtonClick={backButtonClick}
        exitButtonVisible={true}
      />
    </StyledContainer>
  )
}

export default PositionsPage
