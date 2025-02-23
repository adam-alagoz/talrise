import ReferClientForm from './components'
import { StyledContainer } from './index.styles'
import { useReferClientHook } from '../../utils/formikHooks/referClientFormik'

const ReferClientPage = () => {
  const { formik } = useReferClientHook()
  return (
    <StyledContainer>
      <ReferClientForm formik={formik} />
    </StyledContainer>
  )
}

export default ReferClientPage
