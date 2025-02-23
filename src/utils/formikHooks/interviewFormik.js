import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAdminInterviewProcess } from '../../service/API/job'
import { toast } from 'react-toastify'
import { useUser } from '../../redux/hooks/userHook'

export const useInterviewHook = () => {
  const { adminInfo, addAdminInfo, jobId } = useUser()
  const convertNumber = adminInfo?.interviewProcess?.processIds?.map((item) => Number(item))
  const interviewMutation = useAdminInterviewProcess()

  const initialValues = {
    processIds: convertNumber ?? [],
    other: adminInfo?.interviewProcess?.other ?? '',
  }
  const validationSchema = yup.object().shape({
    processIds: yup.array(),
    other: yup.string(),
  })

  const handleSubmit = async (values) => {
    const convertNumber = values?.processIds.map((item) => Number(item))
    const payload = {
      processIds: convertNumber,
      other: values?.other,
    }

    try {
      await interviewMutation.mutateAsync({ data: payload, jobId })
      addAdminInfo({ ...adminInfo, interviewProcess: { processIds: convertNumber, other:values?.other } })
      toast.success('Your interview process info has been submitted successfully.')
    } catch (error) {
      toast.error('Sorry, There was a problem and Interview Process could not be added.')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  return { formik, handleSubmit }
}
