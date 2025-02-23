import Accordion from './Accordion'
import { Text } from '../../../atoms'
import { StyledContainer, MainContainer } from './index.styles'
const ReferredCandidateDetailsPage = () => {
  return (
    <MainContainer>
      <Text display="block" className="text-example" type="Headline1">
        Profile
      </Text>
      <StyledContainer>
        <Accordion />
      </StyledContainer>
    </MainContainer>
  )
}

export default ReferredCandidateDetailsPage
