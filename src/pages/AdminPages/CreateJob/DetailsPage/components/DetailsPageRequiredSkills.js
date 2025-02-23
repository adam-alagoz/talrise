import SuggestedElements from '../../../../../atoms/SuggestedElements'

const DetailsPageRequiredSkills = ({ formik, selectList, suggestedList }) => {
  return (
    <SuggestedElements
      className="suggested"
      formik={formik}
      selectList={selectList}
      suggestedList={suggestedList}
      selectLabel="Experience Years"
      inputPlaceHolder="Type to search"
      overline="Suggested fields"
      subtitle="Choose required technical skills and technologies you want for the position."
      role="client"
      subValues="requiredTechSkills"
    />
  )
}

export default DetailsPageRequiredSkills
