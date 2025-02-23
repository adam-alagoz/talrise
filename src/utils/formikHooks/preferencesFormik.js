import { useFormik } from 'formik'
import * as yup from 'yup'
import { usePreferencesInfo } from '../../service/API/candidate'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { isEqual } from 'lodash'

export const usePreferencesHook = (isNavigate = true) => {
  const getPreferencesMutation = usePreferencesInfo()
  const navigate = useNavigate()
  const { candidateUserInfo, addCandidateUserInfo } = useUser()

  const initialCityWorkTypes = {
    countryId: '',
    cityId: '',
    workPlaceIds: [],
    citySelect: [],
  }

  const initialValues = {
    locations: [initialCityWorkTypes],
    salaryPreferenceId: '',
    minExpectedAmount: '',
    currencyId: '',
    visaStatusId: '',
    contractTypeId: '',
  }

  const validationSchema = yup.object({
    locations: yup.array(
      yup.object({
        countryId: yup.string().required('please select a country'),
        cityId: yup.number().required('please select a city'),
        workPlaceIds: yup.array().min(1, 'Please select at least one workplace').required('Please select at least one workplace'),
        citySelect: yup.array(),
      })
    ),
    salaryPreferenceId: yup.number().required('Please choose a salary preference.'),
    currencyId: yup.number().required('Please choose a currency.'),
    minExpectedAmount: yup.number().typeError('Please enter a valid number').required('Please choose a minimum expected amount.'),
    visaStatusId: yup.number().required('Please choose a visa status.'),
    contractTypeId: yup.number().required('Please choose a contract type.'),
  })

  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.preferences && !isEqual(formik.values, initialValues)) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        preferences: { ...formik.values },
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          preferences: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
  }

  const handleSubmit = (values) => {
    getPreferencesMutation.mutate(values, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success('Your preferences has been submitted successfully.')
        navigate('/completed')
      },
      onError: (error) => {
        toast.error('Please complete forms before progressing.')
        console.warn('🚀 ~ file: index.js ~ line 32 ~ onSubmit ~ error', error)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  useEffect(() => {
    if (candidateUserInfo && !isEqual(candidateUserInfo.preferences, initialValues) && isEqual(formik.values, initialValues)) {
      formik.setValues({
        ...candidateUserInfo.preferences,
      })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo])

  return { formik, initialCityWorkTypes, handleSubmit }
}
