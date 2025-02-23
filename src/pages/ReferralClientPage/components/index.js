import { Text } from '../../../atoms'
import {
  StyledAtomicButton,
  StyledColumn,
  StyledContainer,
  StyledForm,
  StyledWrapper,
} from './index.styles'
import ClientDetails from './ClientDetails'
import CompanyDetails from './CompanyDetails'

const ReferClientForm = ({ formik }) => {
  return (
    <>
      <Text type="Headline1">Referrals</Text>
      <StyledWrapper>
        <StyledContainer>
          <Text type="Headline3">Refer Client</Text>
        </StyledContainer>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledContainer className="formContainer">
            <StyledColumn>
              <ClientDetails formik={formik} />
            </StyledColumn>
            <StyledColumn>
              <CompanyDetails formik={formik} />
            </StyledColumn>
          </StyledContainer>
          <StyledAtomicButton
            className="referClientButton"
            variant="contained"
            label="REFER"
            type="submit"
          ></StyledAtomicButton>
        </StyledForm>
      </StyledWrapper>
    </>
  )
}

export default ReferClientForm
