import SuggestedElements from '../../../atoms/SuggestedElements/index'
import { StyledBody, StyledInsideBody } from './index.styles'

const Positions = ({ formik, suggestedList }) => {
  return (
    <StyledBody>
      <StyledInsideBody>
        <SuggestedElements
          formik={formik}
          suggestedList={suggestedList}
          className="suggested"
          inputPlaceHolder="Type to search"
          overline="Suggested positions"
          subtitle="Please choose all the positions you are interested in."
          headline="Position*"
          itemName="position"
          isPosition={true}
          role="candidate"
        />
      </StyledInsideBody>
    </StyledBody>
  )
}

export default Positions
