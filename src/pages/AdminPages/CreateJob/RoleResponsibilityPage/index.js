import React from 'react'
import { useRoleResponsibilityHook } from '../../../../utils/formikHooks/RoleResponsibilityFormik'
import Layout from '../../CreateJob/CreateJobLayout'
import RoleresponsibilityForm from './RoleresponsibilityForm'
import { useUser } from '../../../../redux/hooks/userHook'

const RoleResponsibilityPage = () => {
  const { formik, handleSubmit } = useRoleResponsibilityHook()
  const { adminInfo, addAdminInfo } = useUser()
  const updateRedux = () => {
    addAdminInfo({ ...adminInfo, roleResponsibility: { ...formik.values } })
  }
  return (
    <Layout
      formik={formik}
      handleNext={() => handleSubmit(formik.values)}
      updateRedux={updateRedux}
      children={<RoleresponsibilityForm formik={formik} />}
    />
  )
}
export default RoleResponsibilityPage
