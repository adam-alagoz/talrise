import SuggestedElements from '../../../atoms/SuggestedElements/index'
import {
  StyledBody,
  StyledInsideBody,
} from './index.styles'
import { suggestedListOfPositions, experiencesForSelectList } from '../../../shared/mock'

const Positions = () => {
  return (
    <StyledBody>
      <StyledInsideBody>
        <SuggestedElements
          className="suggested"
          suggestedList={suggestedListOfPositions}
          selectList={experiencesForSelectList}
          inputPlaceHolder="search..."
          overline="Suggested Positions"
          subtitle="Choose all the open positions in your company."
          headline="Position"
          itemName="position"
        />
      </StyledInsideBody>
    </StyledBody>
  )
}

export default Positions
