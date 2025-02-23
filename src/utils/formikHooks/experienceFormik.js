import { useFormik } from 'formik'
import * as yup from 'yup'
import { useExperience } from '../../service/API/candidate'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import moment from 'moment'
import { isEqual } from 'lodash'

export const useExperienceHook = (isNavigate = true) => {
  const { candidateUserInfo, addCandidateUserInfo } = useUser()
  const experienceMutation = useExperience()
  const today = moment().add(1, 'months').format('YYYY-MM-DD')
  const navigate = useNavigate()

  const originalValues = [
    {
      company: '',
      contractTypeId: '',
      endDate: null,
      explanation: '',
      noticePeriodId: '',
      startDate: null,
      stillWorking: false,
      title: '',
      toolIds: [],
      workPlaceId: '',
    },
  ]

  const initialValues = {
    isNewGraduate: false,
    isStudent: false,
    experiences: [...originalValues],
  }

  const validationSchema = yup.object().shape({
    isNewGraduate: yup.boolean(),
    isStudent: yup.boolean(),
    experiences: yup.array(
      yup.object({
        company: yup.string().required('Please enter a company name.'),
        contractTypeId: yup.number(),
        endDate: yup
          .date()
          .nullable()
          .when('stillWorking', {
            is: false,
            then: yup
              .date()
              .nullable()
              .required('Please enter the end date.')
              .typeError('Please enter a valid date (e.g. 01.1990)'),
          })
          .typeError('Please enter a valid date (e.g. 01.1990)')
          .min(yup.ref('startDate'), 'The end date must come after the start date.')
          .max(today, 'The end date must be less than or equal to the current date.'),
        explanation: yup.string().max(500),
        noticePeriodId: yup.number().when('stillWorking', {
          is: true,
          then: yup
            .number()
            .required('Please indicate the notice period.')
            .typeError('Please indicate the notice period.'),
        }),
        startDate: yup
          .date()
          .required('Please enter the start date.')
          .nullable()
          .typeError('Please enter a valid date (e.g. 01.1990)')
          .max(yup.ref('endDate'), 'The start date must precede the end date.')
          .max(today, 'The start date must be less than or equal to the current date.'),
        stillWorking: yup.boolean(),
        title: yup.string().required('Please enter a title.'),
        toolIds: yup
          .array()
          .min(1, 'Please choose at least one tool you used while working in this position.'),
        workPlaceId: yup.number(),
      })
    ),
  })

  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.experience && !isEqual(formik.values, initialValues)) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        experiences: [...formik.values.experiences],
        isNewGraduate: formik.values.isNewGraduate,
        isStudent: formik.values.isStudent,
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          experience: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
  }

  const handleSubmit = (values) => {
    experienceMutation.mutate(values, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success('Your experience info has been submitted successfully.')
        if (isNavigate) navigate('/candidate/education')
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
    validateOnMount: true,
  })
  useEffect(() => {
    if (
      (candidateUserInfo?.experiences.length > 0 ||
        candidateUserInfo?.isNewGraduate ||
        candidateUserInfo?.isStudent) &&
      isEqual(formik.values, initialValues)
    ) {
      formik.setValues({
        isNewGraduate: candidateUserInfo.isNewGraduate,
        isStudent: candidateUserInfo.isStudent,
        experiences: [...candidateUserInfo.experiences],
      })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo])

  return { formik }
}
