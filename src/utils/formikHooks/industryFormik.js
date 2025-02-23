import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useGetLookUpData } from '../../service/API/lookup'
import { useIndustryUpdate } from '../../service/API/candidate'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export const useIndustryHook = (isNavigate = true) => {
  const navigate = useNavigate()
  const industryMutation = useIndustryUpdate(54)
  const { data: experienceYearsData } = useGetLookUpData('EXPERIENCE_YEARS')
  const { data: industryData } = useGetLookUpData('INDUSTRY')
  const { candidateUserInfo, addCandidateUserInfo } = useUser()

  const initialValues = {
    searchText: '',
    addedItemsFormik: [],
    seeMore: false,
    selectValues: {},
  }

  const validationSchema = yup.object({
    add: yup.string().min(2),
    addedItemsFormik: yup.array(),
    seeMore: yup.boolean(),
    selectValues: yup.object(),
  })
  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.industry && formik.values.addedItemsFormik.length > 0) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        industries: [...formik.values.addedItemsFormik],
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          industry: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
    if (candidateUserInfo.candidateStatus.industry && candidateUserInfo?.industries[0].length === 0) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          industry: false,
          percentage: candidateUserInfo.candidateStatus.percentage - 10,
        },
      })
    }
  }

  const onSubmit = (values) => {
    const data = {
      industries:
        values.addedItemsFormik.length !== 0
          ? values.addedItemsFormik[0].map(({ position, experienceYears }) => ({
              experienceYearsId: experienceYears.id,
              industryId: position.id,
            }))
          : [],
    }
    industryMutation.mutate(data, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success('Your industry data has been submitted successfully.')
        if (isNavigate) navigate('/candidate/language')
      },
      onError: (error) => {
        toast.error(error.message)
        console.error('🚀 ~ file: index.js ~ line 41 ~ onSubmit ~ error', error)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  useEffect(() => {
    if (candidateUserInfo?.industries.length > 0 && formik.values.addedItemsFormik.length === 0) {
      formik.setValues({ ...formik.values, addedItemsFormik: [...candidateUserInfo.industries] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo])

  return { formik, selectList: experienceYearsData?.data, suggestedList: industryData?.data }
}
