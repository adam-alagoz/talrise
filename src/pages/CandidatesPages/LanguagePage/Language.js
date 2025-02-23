import SuggestedElements from '../../../atoms/SuggestedElements/index'
import { StyledBody, StyledInsideBody } from './index.styles'

const Language = ({ formik, selectList, suggestedList }) => (
  <StyledBody>
    <StyledInsideBody>
      <SuggestedElements
        suggestedList={suggestedList}
        className="suggested"
        formik={formik}
        selectList={selectList}
        selectLabel="Proficiency"
        inputPlaceHolder="Type to search"
        overline="Suggested Languages"
        subtitle="Please add all the languages you know."
        headline="Language*"
        itemName="language"
        role="candidate"
      />
    </StyledInsideBody>
  </StyledBody>
)

export default Language
