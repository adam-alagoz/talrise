import Text from '../../../../atoms/Text'
import ApplicantsListTable from '../../../../components/AdminComponents/ApplicantsListTable/ApplicantsListTable'
import { StyledContainer } from './index.styles.js'

const CandidateProcess = () => {
  return (
    <StyledContainer>
      <Text display="block">Candidate Process</Text>
      <ApplicantsListTable />
    </StyledContainer>
  )
}

export default CandidateProcess
