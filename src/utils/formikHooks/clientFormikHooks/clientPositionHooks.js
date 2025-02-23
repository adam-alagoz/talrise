import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useGetClientData, useOpenPositionsUpdate } from '../../../service/API/client'
import { useGetLookUpData } from '../../../service/API/lookup'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
export const useClientPositionsHook = (isNavigate = true) => {
  const { data: clientData } = useGetClientData()
  const positionMutation = useOpenPositionsUpdate()
  const { data: positionData } = useGetLookUpData('POSITION')
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()

  const initialValues = {
    searchText: '',
    addedItemsFormik: [[]],
    seeMore: false,
    selectValues: {},
  }

  const validationSchema = yup.object({
    addedItemsFormik: yup.array(),
    seeMore: yup.boolean(),
    selectValues: yup.object(),
  })

  const onSubmit = (values) => {
    if (values.addedItemsFormik.length === 0 || values.addedItemsFormik[0].length === 0) {
      toast.error('Please choose at least one position')
      return
    }
    const data = {
      positions: values.addedItemsFormik[0].map(({ position }) => position.id),
    }
    positionMutation.mutate(data, {
      onSuccess: () => {
        toast.success('Your position data has been submitted successfully.')
        if (isNavigate) navigate('/completed')
      },
      onError: (error) => {
        toast.error(error.message)
        console.error('🚀 ~ file: index.js ~ line 68 ~ onSubmit ~ error', error)
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  useEffect(() => {
    if (clientData?.data?.clientPositions?.length > 0 && formik?.values?.addedItemsFormik[0]?.length === 0) {
      formik.setValues({
        ...formik.values,
        addedItemsFormik: [
          [
            ...clientData.data.clientPositions.map((item) => {
              return { position: item }
            }),
          ],
        ],
      })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientData])

  return { formik, suggestedList: positionData?.data }
}
