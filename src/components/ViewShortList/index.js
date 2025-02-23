import { Text } from '../../atoms'
import { StyledContainer, ChildContainer } from './index.styles'
const ViewShortList = ({ children }) => {
  return (
    <StyledContainer>
      <Text>View Shortlist</Text>
      <ChildContainer>
      {children}
      </ChildContainer>
    </StyledContainer>
  )
}

export default ViewShortList
