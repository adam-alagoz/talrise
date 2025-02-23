import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAdminCompanyProfile } from '../../../service/API/admin'
import { useCompanyProfile } from '../../../service/API/client'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useUser } from '../../../redux/hooks'

export const useCompanyProfileHook = (isAdmin = false, initialClientId = null) => {
  const { addClientId, clientId, resetInfo } = useUser()
  if (initialClientId) addClientId(initialClientId)
  const [isSuccess, setIsSucc] = useState(false)
  const navigate = useNavigate()
  const getCompanyProfileMutation = useCompanyProfile()
  const getCompanyProfileMutationAdmin = useAdminCompanyProfile()
  const selectedMutation = isAdmin ? getCompanyProfileMutationAdmin : getCompanyProfileMutation

  const initialValues = {
    companyProfile: '',
  }
  const validationSchema = yup.object({
    companyProfile: yup.string().required('Please enter your company name.'),
  })
  const handleSubmit = (values) => {
    selectedMutation.mutate(
      { data: values, clientId: clientId },
      {
        onSuccess: () => {
          resetInfo('clientInfo')
          resetInfo('clientId')
          setIsSucc(true)
          toast.success('Company details has been submitted successfully!')
          if (!isAdmin) navigate('/client/position')
        },
        onError: (error) => {
          toast.error(error.message)
        },
      }
    )
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: handleSubmit,
  })
  return { formik, isSuccess, handleSubmit }
}
