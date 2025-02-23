import { SuggestedElements } from '../../../../../atoms'

function DetailsPageOptional({ formik, suggestedList, selectList }) {
  return (
    <SuggestedElements
      className="suggested"
      formik={formik}
      selectList={selectList}
      suggestedList={suggestedList}
      selectLabel="Experience Years"
      inputPlaceHolder="Type to search"
      overline="Suggested fields"
      subtitle="Choose optional technical skills and technologies you want for the position."
      role="admin"
      subValues="optionalTechSkills"
    />
  )
}
export default DetailsPageOptional
