import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePersonalInfo } from '../../service/API/candidate'
import { useUser } from '../../redux/hooks/userHook'
import { useEffect } from 'react'
import ErrorIcon from '../../assets/svg/ErrorIcon.svg'
import { removeEmptyKeys } from '../functions/utility'

export const usePersonalInfoHook = (isNavigate = true) => {
  const { candidateUserInfo, addCandidateUserInfo } = useUser()

  const isLoaded = (infoData) => {
    let isLoaded = false
    Object.values(infoData).forEach((value) => {
      if (value !== null) {
        isLoaded = true
      }
    })
    return isLoaded
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    linkedIn: '',
    countryId: '',
    cityId: '',
    email: '',
    countryPhoneCode: '',
    mobile: '',
  }

  const navigate = useNavigate()
  const getPersonnelInfoMutation = usePersonalInfo()

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .matches('^[a-zA-Z]+(?: [a-zA-Z]+)*$', 'Not a valid name! (Only letters)')
      .min(2, 'First name should be 2 characters minimum.')
      .required('Please enter your first name.'),
    lastName: yup
      .string()
      .matches('^[a-zA-Z]+([.]{1})?(?:([ ])?[a-zA-Z]+([.]{1})?)*$', 'Not a valid name!')
      .required('Please enter your last name.'),
    linkedIn: yup
      .string()
      .matches('(https://)?(www.)?linkedin.com/in/[A-z0-9_-]+/?$', 'LinkedIn URL must be a valid LinkedIn URL')
      .required('Please enter your LinkedIn URL.'),
    countryId: yup.string(),
    cityId: yup.string(),
    email: yup
      .string()
      .min(6, 'Email should be 6 characters minimum.')
      .email('Email must be a valid email (example@mail.com)')
      .required('Please enter your e-mail address.'),
    countryPhoneCode: yup.string().nullable(),
    mobile: yup
      .string()
      .matches('^[0-9]*$', 'Mobile number must include only digits.')
      .min(7, 'Mobile number must consist of at least 7 digits.')
      .max(14, 'Mobile number cannot be longer than 14 digits.')
      .nullable(),
  })
  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.personnelInfo) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        personnelInfo: { ...formik.values },
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          personnelInfo: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
  }
  const handleSubmit = (values) => {
    const newValue = removeEmptyKeys(values)
    getPersonnelInfoMutation.mutate(newValue, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success('Personal information has been submitted successfully.')
        if (isNavigate) navigate('/candidate/upload-cv')
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        toast.error(errorMessages, { icon: <img src={ErrorIcon} alt="" /> })
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  useEffect(() => {
    if (isLoaded(candidateUserInfo?.personnelInfo)) {
      formik.setValues(candidateUserInfo.personnelInfo)
    }
    // eslint-disable-next-line
  }, [candidateUserInfo])

  return { formik, handleSubmit }
}
