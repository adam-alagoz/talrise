import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useUser } from '../../../src/redux/hooks/userHook'
import { useRoleResponsibilityMutation } from '../../service/API/job'

export const useRoleResponsibilityHook = () => {
  const { adminInfo, addAdminInfo, jobId } = useUser()
  const rol = adminInfo?.roleResponsibility
  const roleResponsibilityMutation = useRoleResponsibilityMutation()
  const initialValues = {
    roleResponsibility: rol ?? '',
  }
  const validationSchema = yup.object({
    roleResponsibility: yup.string().required('Please enter a Role roleResponsibility.').min(5),
  })
  const handleSubmit = async (values) => {
    try {
      await roleResponsibilityMutation.mutateAsync({
        data: { roleResponsibility: values.roleResponsibility },
        jobId,
      })
      addAdminInfo({
        ...adminInfo,
        roleResponsibility: values.roleResponsibility,
      })
      toast.success('Role Responsibility has been submitted successfully.')
    } catch (error) {
      toast.error('Sorry, There was a problem and Role Responsibility could not be added.')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })
  return { formik, handleSubmit }
}
