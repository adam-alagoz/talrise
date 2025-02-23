import React from 'react'
import Layout from '../CreateJobLayout/index'
import BasicInfoForm from './BasicInfoForm'
import { useBasicInfoHook } from '../../../../utils/formikHooks/adminFormikHooks/basicInfoHooks'
import { useUser } from '../../../../redux/hooks'

const BasicInfoPage = () => {
  const { formik, handleSubmit } = useBasicInfoHook()
  const { adminInfo, addAdminInfo } = useUser()

  const updateRedux = () => {
    addAdminInfo({ ...adminInfo, basicInfo: { ...formik.values } })
  }

  return (
    <Layout
      updateRedux={() => updateRedux()}
      handleNext={() => handleSubmit(formik?.values)}
      children={<BasicInfoForm formik={formik} />}
    />
  )
}
export default BasicInfoPage
