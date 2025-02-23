import Layout from '../CreateJobLayout'
import JobSummaryForm from './JobSummaryForm'

export default function CreateJobTablePage() {
  return <Layout isHideNextButton children={<JobSummaryForm />} />
}
