import React from 'react'
import Layout from '../CreateJobLayout/index'
import DetailsPageForm from './DetailsPageForm'
import { useDetailsHook } from '../../../../utils/formikHooks/adminFormikHooks/detailsHooks'

const DetailsPage = () => {
  const { formik, onSubmit, selectList, suggestedList, softSkillSuggestedList } = useDetailsHook()
  return (
    <Layout
      handleNext={() => onSubmit(formik.values)}
      children={
        <DetailsPageForm
          formik={formik}
          selectList={selectList}
          suggestedList={suggestedList}
          softSkillSuggestedList={softSkillSuggestedList}
        />
      }
    />
  )
}
export default DetailsPage
