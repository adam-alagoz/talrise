import Layout from '../../../components/GeneralComponents/layout'
import { StyledContainer } from './index.styles'
import Positions from '../../CandidatesPages/PositionPage/Positions'
import { useNavigate } from 'react-router'
import StepperClient from '../../../atoms/StepperClient'
import { useClientPositionsHook } from '../../../utils/formikHooks/clientFormikHooks/clientPositionHooks'
import { useUser } from '../../../redux/hooks'

const ClientPositionPage = () => {
  const { addClientInfo, clientInfo } = useUser()
  const navigate = useNavigate()
  const { formik, suggestedList } = useClientPositionsHook()

  const updateRedux = () => {
    addClientInfo({ ...clientInfo, positions: [...formik.values.addedItemsFormik] })
  }
  const nextButtonClick = () => {
    updateRedux()
    formik.handleSubmit()
  }

  const backButtonClick = () => {
    updateRedux()
    navigate('/client/company')
  }




  return (
    <StyledContainer>
      <Layout
        variant="progressBar"
        componentLeft={<StepperClient step={2} updateRedux={updateRedux}/>}
        componentRight={<Positions formik={formik}  suggestedList={suggestedList} />}
        nextButtonClick={nextButtonClick} 
        backButtonClick={backButtonClick}
      />
    </StyledContainer>

  )

}




export default ClientPositionPage