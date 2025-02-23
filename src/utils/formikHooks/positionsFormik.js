import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { usePositionUpdate } from '../../service/API/candidate'
import { useGetLookUpData } from '../../service/API/lookup'
import { useUser } from '../../redux/hooks'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
export const usePositionsHook = (isNavigate = true) => {
  const positionMutation = usePositionUpdate()
  const { data: positionData } = useGetLookUpData('POSITION')
  const { candidateUserInfo, addCandidateUserInfo } = useUser()
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

  const updateReduxStepperStatus = () => {
    if (!candidateUserInfo.candidateStatus.position) {
      addCandidateUserInfo({
        ...candidateUserInfo,
        positions: [...formik.values.addedItemsFormik],
        skillRefetchKey: formik.values.addedItemsFormik[0].map((pos) => pos.position.name).join(),
        candidateStatus: {
          ...candidateUserInfo.candidateStatus,
          position: true,
          percentage: candidateUserInfo.candidateStatus.percentage + 10,
        },
      })
    } else {
      addCandidateUserInfo({
        ...candidateUserInfo,
        skillRefetchKey: formik.values.addedItemsFormik[0].map((pos) => pos.position.name).join(),
      })
    }
  }
  const onSubmit = (values) => {
    if (values.addedItemsFormik.length === 0 || values.addedItemsFormik[0].length === 0) {
      toast.error('Please choose at least one position')
      return
    }
    const data = {
      positions: values.addedItemsFormik[0].map(({ position }) => ({
        positionId: position.id,
      })),
    }
    positionMutation.mutate(data, {
      onSuccess: () => {
        updateReduxStepperStatus()
        toast.success('Your position data has been submitted successfully.')
        if (isNavigate) navigate('/candidate/skill-set')
      },
      onError: (error) => {
        updateReduxStepperStatus()
        toast.error(error.message)
        console.error('🚀 ~ file: index.js ~ line 32 ~ onSubmit ~ error', error)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  useEffect(() => {
    if (candidateUserInfo?.positions.length > 0 && formik.values.addedItemsFormik.length === 0) {
      formik.setValues({ ...formik.values, addedItemsFormik: [...candidateUserInfo.positions] })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidateUserInfo])

  return { formik, suggestedList: positionData?.data }
}
