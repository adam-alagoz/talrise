import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAdminCompanyDetails } from '../../../service/API/admin'
import { useCompanyDetails, useGetClientData } from '../../../service/API/client'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { clientProfileHelper } from '../../../pages/AdminPages/CreateClient/clientProfileHelper'
import { useUser } from '../../../redux/hooks'

export const useCompanyDetailsHook = (isAdmin = false, initialclientId = null, isNavigate = false) => {
  const { data: clientData } = useGetClientData()
  const {clientId} = useUser()
  const [isSuccess, setIsSucc] = useState(false)
  const navigate = useNavigate()
  const getCompanyDetailsMutation = useCompanyDetails()
  const getCompanyDetailsMutationAdmin = useAdminCompanyDetails()
  const selectedMutation = isAdmin ? getCompanyDetailsMutationAdmin : getCompanyDetailsMutation
  const initialValues = {
    companyName: '',
    companySizeId: '',
    industryId: '',
    linkedin: '',
    countryId: '',
    locationId: '',
    website: '',
    workPlaceIds: [],
  }
  const validationSchema = yup.object({
    companyName: yup.string().required('Please enter your company name.').min(3),
    companySizeId: yup.string().required('Please select your company size.'),
    industryId: yup.string().required('Please select your industry.'),
    linkedin: yup
      .string()
      .matches('(https://)?(www.)?linkedin.com/company/[A-z0-9_-]+/?$', 'LinkedIn URL must be a valid LinkedIn URL')
      .required('Please enter your LinkedIn URL.'),
    website: yup
      .string()
      .matches('(https?://)?([wd]+.)?[wd]+.w+/?.+', 'Website address must be a valid website address')
      .required('Please enter your website address.'),
    locationId: yup.string().required('Please select your city.'),
    workPlaceIds: yup.array().required('Please select a workplace.'),
  })
  useEffect(() => {
    if (clientData) {
      if (clientData?.data?.clientCompanyDetail?.length) {
        formik.setValues(clientProfileHelper({ ...clientData?.data?.clientCompanyDetail }))
      } else {
        formik.setValues(clientProfileHelper({ ...clientData?.data?.clientCompanyDetail }))
      }
    }
    // eslint-disable-next-line
  }, [clientData])
  
  const handleSubmit = (values) => {
    if (isAdmin) {
      selectedMutation.mutate(
        { data: values, clientId: clientId },
        {
          onSuccess: () => {
            setIsSucc(true)
            toast.success('Company details has been submitted successfully!')
            if (!isAdmin) navigate('/client/position')
          },
          onError: (error) => {
            console.error('error', error)
            toast.error(error.message)
          },
        }
      )
    } else {
      selectedMutation.mutate(values, {
        onSuccess: ({ data }) => {
          setIsSucc(true)
          toast.success('Company details has been submitted successfully!')
          if (isNavigate) navigate('/client/position')
        },
        onError: (error) => {
          console.error('error', error)
          toast.error(error.message)
        },
      })
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: handleSubmit,
  })
  return { formik, isSuccess, handleSubmit }
}
