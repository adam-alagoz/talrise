import React from 'react'
import { SuggestedElements } from '../../../../../atoms'

function DetailsPageSoftSkills({ formik, softSkillSuggestedList, selectList }) {
  return (
    <SuggestedElements
      className="suggested"
      formik={formik}
      selectList={selectList}
      suggestedList={softSkillSuggestedList}
      selectLabel="Experience Years"
      inputPlaceHolder="Type to search"
      overline="Suggested fields"
      subtitle="Add to soft skills you want for the position."
      role="admin"
      checkbox={true}
      columnCount={2}
      subValues="softSkills"
    />
  )
}
export default DetailsPageSoftSkills
