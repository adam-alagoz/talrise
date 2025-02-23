import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useSkillUpdate, useGetSkillList } from '../../service/API/candidate'
import { useGetLookUpData } from '../../service/API/lookup'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export const useSkillSetHook = (isNavigate = true) => {
  const { candidateUserInfo, addCandidateUserInfo } = useUser()
  const skillMutation = useSkillUpdate()
  const { data: experienceYearsData } = useGetLookUpData('EXPERIENCE_YEARS')
  const { data: skillData } = useGetSkillList(candidateUserInfo.skillRefetchKey)
  const navigate = useNavigate()

  const initialValues = {
    searchText: '',
    addedItemsFormik: [],
    seeMore: false,
    selectValues: {},
  }
  const validationSchema = yup.object({
    addedItemsFormik: yup.array(),
    seeMore: yup.boolean(),
    selectValues: yup.object(),
  })
  const updateReduxStepperStatus = (valuesArray) => {
    if (!candidateUserInfo.candidateStatus.skillSet) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        skills: [...formik.values.addedItemsFormik],
        toolRefetchKey: valuesArray.skills.map((skill) => skill.toolId).join(),
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          skillSet: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    } else {
      addCandidateUserInfo({
        ...candidateUserInfo,
        toolRefetchKey: valuesArray.skills.map((skill) => skill.toolId).join(),
      })
    }
  }
  const onSubmit = (values) => {
    let valuesArray = { ...values.addedItemsFormik }
    let posIdList = skillData.data.skills.map((item) => item.position.id)
    let toolArray = []
    posIdList.forEach((posId) => {
      if (valuesArray[posId]) toolArray = toolArray.concat(valuesArray[posId])
    })
    valuesArray = {
      skills: toolArray.map(({ position, experienceYears }) => ({
        experienceYearsId: experienceYears.id,
        toolId: position.id,
      })),
    }
    if (valuesArray.skills.length === 0) {
      toast.error('Please choose at least one skill')
      return
    }
    skillMutation.mutate(valuesArray, {
      onSuccess: () => {
        updateReduxStepperStatus(valuesArray)
        toast.success('Your skill set data has been submitted successfully.')
        if (isNavigate) navigate('/candidate/industry')
      },
      onError: (error) => {
        console.error('🚀 ~ file: index.js ~ line 42 ~ onSubmit ~ error', error)
        toast.error(error.message)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  useEffect(() => {
    if (candidateUserInfo?.skills.length > 0 && skillData?.data.skills && formik.values.addedItemsFormik.length === 0) {
      formik.setValues({ ...formik.values, addedItemsFormik: [...candidateUserInfo?.skills] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo, skillData])

  return {
    formik,
    selectList: experienceYearsData?.data,
    suggestedList: skillData?.data,
    positionData: skillData?.data.skills,
  }
}
