import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useCreateClientReferral } from '../../service/API/candidate'

export const useReferClientHook = () => {
  const referClientMutation = useCreateClientReferral()
  const navigate = useNavigate()

  const initialValues = {
    companyCountryPhoneCode: '',
    companyLinkedIn: '',
    companyMobile: '',
    companyName: '',
    countryId: '',
    countryPhoneCode: '',
    email: '',
    firstName: '',
    lastName: '',
    linkedIn: '',
    locationId: '',
    mobile: '',
    position: '',
    website: '',
  }
  const validationSchema = yup.object({
    companyCountryPhoneCode: yup.string().required('Please choose a country code.'),
    companyLinkedIn: yup.string().required("Please enter company's LinkedIn account link."),
    companyMobile: yup.string().max(12).required("Please enter company's phone number."),
    companyName: yup.string().required('Please type the company name.'),
    countryId: yup.number().required('Please choose a country.'),
    countryPhoneCode: yup.string().required('Please choose a country code.'),
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required("Please enter contact's email address."),
    firstName: yup.string().required("Please type contact's first name."),
    lastName: yup.string().required("Please type contact's last name."),
    linkedIn: yup.string().required("Please enter contact's LinkedIn account link."),
    locationId: yup.string().required("Please type company's location."),
    mobile: yup
      .string('Please use numbers only.')
      .max(12)
      .required("Please enter contact's phone number."),
    position: yup.string().required("Please type contact's position."),
    website: yup.string().required("Please enter company's website link."),
  })

  const handleSubmit = (values) => {
    referClientMutation.mutate(values, {
      onSuccess: () => {
        toast.success('Referee data has been submitted successfully.')
        navigate('/referrals')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  return { formik }
}
