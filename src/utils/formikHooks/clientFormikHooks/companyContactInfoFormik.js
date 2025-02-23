import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as generateId } from 'uuid'
import { useContactInfo, useGetClientData } from '../../../service/API/client'
import { useAdminContactInfo, useAdminContactInfoUpdate } from '../../../service/API/admin'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useUser } from '../../../redux/hooks'

export const useCompanyContactInfoHook = (isAdmin = false, initialclientId = null, isNavigate = false) => {
  const { data: clientData } = useGetClientData()
  const { addClientId, clientId, clientInfo, addClientInfo } = useUser()
  if (initialclientId) addClientId(initialclientId)
  const [isSuccess, setIsSucc] = useState(false)
  const navigate = useNavigate()
  const contactMutation = useContactInfo()
  const contactMutationAdmin = useAdminContactInfo()
  const contactMutationAdminUpdate = useAdminContactInfoUpdate()
  const selectedMutation = isAdmin ? (clientId ? contactMutationAdminUpdate : contactMutationAdmin) : contactMutation
  
  useEffect(() => {
    if (clientData) {
      if (clientData?.data?.clientContact?.length) {
        formik.setValues({
          ...formik.values,
          contactInfos: [...clientData?.data?.clientContact],
        })
      } else {
        formik.setValues({
          ...formik.values,
          contactInfos: formik.initialValues.contactInfos,
        })
      }
    }
    // eslint-disable-next-line
  }, [clientData])

  const validationSchema = yup.object().shape({
    contactInfos: yup.array(
      yup.object({
        firstName: yup
          .string()
          .matches('^[a-zA-Z]+(?: [a-zA-Z]+)*$', 'Not a valid name! (Only letters)')
          .min(2, 'First name should be 2 characters minimum.')
          .required('Please enter your first name.'),
        lastName: yup
          .string()
          .matches('^[a-zA-Z]+([.]{1})?(?:([ ])?[a-zA-Z]+([.]{1})?)*$', 'Not a valid name!')
          .required('Please enter your last name.'),
        clientRole: yup.string().required('Please enter your role.'),
        linkedin: yup
          .string()
          .matches('(https://)?(www.)?linkedin.com/in/[A-z0-9_-]+/?$', 'LinkedIn URL must be a valid LinkedIn URL')
          .required('Please enter your LinkedIn URL.'),
        email: yup
          .string()
          .min(6, 'Email should be 6 characters minimum.')
          .email('Email must be a valid email (example@mail.com)')
          .required('Please enter your e-mail address.'),
        countryPhoneCode: yup.string(),
        mobileNumber: yup
          .string()
          .matches('^[0-9]*$', 'Mobile number must include only digits.')
          .min(7, 'Mobile number must consist of at least 7 digits.')
          .max(14, 'Mobile number cannot be longer than 14 digits.')
          .nullable(),
      })
    ),
  })

  const handleSubmit = (values) => {
    if (clientId) {
      selectedMutation.mutate(
        { data: values, clientId: clientId },
        {
          onSuccess: () => {
            addClientInfo({ ...clientInfo, ...values })
            setIsSucc(true)
            toast.success('ContactInfo details has been updated successfully!')
            if (!isAdmin) navigate('/client/position')
          },
          onError: (error) => {
            console.error('error', error)
            toast.error(error.message)
          },
        }
      )
    } else {
      values.contactInfos.map((contact) => {
        if (!contact.contactId) {
          contact.contactId = generateId()
        }
        return contact.contactId
      })
      selectedMutation.mutate(values, {
        onSuccess: ({ data }) => {
          if (data) {
            addClientInfo({ ...clientInfo, ...values })
            addClientId(data.id)
          }
          setIsSucc(true)
          toast.success('ContactInfo details has been submitted successfully!')
          if (!isAdmin && isNavigate) navigate('/client/company')
        },
        onError: (error) => {
          toast.error(
            'The e-mail or linkedin account you have entered has been used before, please use a different e-mail or linkedin account'
          )
        },
      })
    }
  }

  const formik = useFormik({
    initialValues:{...clientInfo},
    validationSchema,
    validateOnBlur: false,
    onSubmit: handleSubmit,
  })
  return { formik, clientId, isSuccess }
}
