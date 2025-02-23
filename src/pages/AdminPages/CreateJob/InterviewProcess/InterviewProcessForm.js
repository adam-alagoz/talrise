import { useGetLookUpData } from '../../../../service/API/lookup'
import CheckBoxAndText from '../../../../components/CheckboxANDText'

function InterviewProcessForm({ formik }) {
  const data = useGetLookUpData('INTERVIEW_PROCESS')
  const newData = data?.data?.data?.filter((item) => item.id >= 264 && item.id < 3000)
  return (
    <CheckBoxAndText
      headLine="Interview Process"
      subTitle="Please choose one or more stages included in your interview process."
      data={newData}
      formik={formik}
      interview
    />
  )
}

export default InterviewProcessForm
