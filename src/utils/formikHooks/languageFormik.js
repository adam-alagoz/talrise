import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLanguageUpdate } from '../../service/API/candidate'
import { useGetLookUpData } from '../../service/API/lookup'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

export const useLanguageHook = (isNavigate = true) => {
   const [isDisabled, setIsDisabled] = useState(false)
  const languageMutation = useLanguageUpdate(54)
  const { candidateUserInfo, addCandidateUserInfo } = useUser()
  const { data: languageList } = useGetLookUpData('LANGUAGE')
  const { data: languageLevelList } = useGetLookUpData('LANGUAGE_LEVEL')
  const navigate = useNavigate()

  const initialValues = {
    searchText: '',
    addedItemsFormik: [],
    seeMore: false,
    selectValues: {},
  }

  const validationSchema = yup.object({
    add: yup.string().min(2),
    addedItemsFormik: yup.array(),
    suggestedListFormik: yup.array(),
    seeMore: yup.boolean(),
    selectValues: yup.object(),
  })
  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.language) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        languages: [...formik.values.addedItemsFormik],
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          language: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    }
  }
  const onSubmit = (values) => {
    setIsDisabled(true)
    if (values.addedItemsFormik.length === 0 || values.addedItemsFormik[0].length === 0) {
 
      toast.error('Please choose at least one language')
      return setTimeout(()=>setIsDisabled(false), 1000)
    }

    const data = {
      languages: values.addedItemsFormik[0]?.map(({ position, experienceYears }) => ({
        languageId: position.id,
        languageLevelId: experienceYears.id,
      })),
    }

    languageMutation.mutate(data, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success('Your language data has been submitted successfully.')
        setIsDisabled(false)
        if (isNavigate) navigate('/candidate/experience')
      },
      onError: (error) => {
        toast.error(error.message)
        setIsDisabled(false)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  useEffect(() => {
    if (candidateUserInfo?.languages.length > 0 && formik.values.addedItemsFormik.length === 0) {
      formik.setValues({ ...formik.values, addedItemsFormik: [...candidateUserInfo.languages] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo])
  return { formik, selectList: languageLevelList?.data, suggestedList: languageList?.data, isDisabled }
}
