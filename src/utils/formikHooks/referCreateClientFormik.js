import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useReferCreateClient } from '../../service/API/candidate'

export const useReferCreateClientHook = () => {
  const initialValues = {
    companyName: '',
    companyLinkedIn: '',
    companyWebsite: '',
    countryId: '',
    cityId: '',
  }

  const getReferCreateMutation = useReferCreateClient()

  const validationSchema = yup.object({
    companyName: yup
      .string()
      .matches('^[a-zA-Z]+(?: [a-zA-Z]+)*$', 'Not a valid Company Name! (Only letters)')
      .min(2, 'Company Name should be 2 characters minimum.')
      .required('Please enter Company Name.'),
    companyLinkedIn: yup
    .string()
    .matches(
      '(https://)?(www.)?linkedin.com/in/[A-z0-9_-]+/?$',
      'LinkedIn URL must be a valid LinkedIn URL'
    )
    .required('Please enter Company LinkedIn URL.'),
    companyWebsite: yup
    .string()
    .matches(
        '((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$',
        'Enter correct url!'
    )
    .required('Please enter Company Website.'),
    countryId: yup.string(),
    cityId: yup.string(),
  })

  const handleSubmit = (values) => {
    getReferCreateMutation.mutate(values, {
      onSuccess: () => {
        toast.success('Create Client has been submitted successfully.')
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        toast.error(
          'An error occurred while submitting Create Client. Error message: ' +
            errorMessages
        )
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  return { formik, handleSubmit }
}
