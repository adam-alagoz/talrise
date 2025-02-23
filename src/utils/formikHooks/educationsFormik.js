import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useEducation } from '../../service/API/candidate'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { isEqual } from 'lodash'
export const useEducationHook = (isNavigate = true) => {
  const educationMutation = useEducation()
  const navigate = useNavigate()
  const { candidateUserInfo, addCandidateUserInfo } = useUser()
  const initialEducationValues = {
    universityId: '',
    degreeId: '',
    departmentId: '',
    startYear: '',
    endYear: '',
  }

  const initialValues = {
    educations: [initialEducationValues],
    certificates: [],
  }

  const validationSchema = yup.object({
    educations: yup.array(
      yup.object({
        universityId: yup.number().required('Please enter your university.'),
        degreeId: yup.number().required('Please choose your degree.'),
        departmentId: yup.number().required('Please choose your department.'),
        startYear: yup.string().required('Please choose the start year.'),
        endYear: yup.string('Please choose the end year.'),
      })
    ),
    certificates: yup.array(),
  })

  const isValidForm = (values) => {
    return (
      values.educations.length &&
      values.educations[0].universityId &&
      values.educations[0].degreeId &&
      values.educations[0].departmentId &&
      values.educations[0].startYear
    )
  }

  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.education) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        educations: { ...formik.values },
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          education: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
  }
  const handleSubmit = (values) => {
    let currCerts = values.certificates.map((cert) => {
      return cert.id
    })
    const currVal = { certificates: currCerts, educations: values.educations }
    if (values.educations.length && isValidForm(values)) {
      educationMutation.mutate(currVal, {
        onSuccess: () => {
          updateReduxStepperStatus()
          toast.success('Your education info has been added successfully.')
          if (isNavigate) navigate('/candidate/preference')
        },

        onError: (error) => {
          const errors = error.response.data.errors
          const errorMessages = errors.map((error) => error.message).join(' & ')
          toast.error(
            'An error occured while adding your education info. Error message: ' + errorMessages
          )
        },
      })
    } else {
      toast.error('Please add at least one education info completely. ')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    validateOnMount: true,
  })
  useEffect(() => {
    if (
      (candidateUserInfo?.educations.educations?.length > 0 ||
        candidateUserInfo?.educations.certificates?.length > 0) &&
      isEqual(formik.values.educations[0], initialEducationValues)
    ) {
      formik.setValues({ ...candidateUserInfo.educations })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo])
  return { formik, initialEducationValues }
}
