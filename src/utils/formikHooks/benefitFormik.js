import { useFormik } from 'formik'
import * as yup from 'yup'
import { useBenefitJob } from '../../service/API/job'
import { toast } from 'react-toastify'
import { useUser } from '../../redux/hooks'

export const useBenefitHook = () => {
  const { adminInfo, addAdminInfo, jobId } = useUser()

  const benefitApi = useBenefitJob()
  const initialValues = {
    benefitIds: adminInfo.benefits?.benefitIds ?? [],
    other: adminInfo.benefits.other ?? '',
  }

  const validationSchema = yup.object().shape({
    benefitIds: yup.array(),
    other: yup.string(),
  })

  const handleSubmit = async (values) => {
    const payload = {
      benefitIds: values.benefitIds,
      other: values.other,
    }

    try {
      await benefitApi.mutateAsync({ data: payload, jobId })
      addAdminInfo({ ...adminInfo, benefits: { ...payload } })
      toast.success('Your Benefits info has been submitted successfully.')
    } catch (error) {
      toast.error('Sorry, There was a problem and Benefits could not be added.')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  return { formik, handleSubmit }
}
