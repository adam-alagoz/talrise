import Text from '../../../../atoms/Text'
import ApplicantsListTable from '../../../../components/AdminComponents/ApplicantsListTable/ApplicantsListTable'
import { StyledContainer, StyledText } from './index.styles'

const ApplicantsList = () => {
  return (
    <StyledContainer>
      <Text display="block">
        Candidates
      </Text>
      <StyledText display="block" type="Headline3">
        Applicants List
      </StyledText>
      <ApplicantsListTable />
    </StyledContainer>
  )
}

export default ApplicantsList
