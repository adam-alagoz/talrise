import InterviewProcessForm from './InterviewProcessForm'
import Layout from '../CreateJobLayout'
import { useInterviewHook } from '../../../../utils/formikHooks/interviewFormik'
function InterviewProcess() {
  const { formik, handleSubmit } = useInterviewHook()
  return <Layout handleNext={() => handleSubmit(formik.values)} children={<InterviewProcessForm formik={formik} />} />
}

export default InterviewProcess
