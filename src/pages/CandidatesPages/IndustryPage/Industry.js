import SuggestedElements from '../../../atoms/SuggestedElements/index'
import { StyledBody, StyledInsideBody } from './index.styles'

const Industry = ({ formik, selectList, suggestedList }) => {

  return (
    <StyledBody>
      <StyledInsideBody>
        <SuggestedElements
          className="suggested"
          formik={formik}
          selectList={selectList}
          suggestedList={suggestedList}
          selectLabel="Experience Years"
          inputPlaceHolder="Type to search"
          overline="Suggested Fields"
          subtitle="Please choose the fields you are interested in. "
          headline="Industry"
          itemName="industry"
          role="candidate"
        />
      </StyledInsideBody>
    </StyledBody>
  )
}

export default Industry
