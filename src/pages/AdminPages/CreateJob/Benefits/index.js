import Layout from '../../CreateJob/CreateJobLayout'
import BenefitsForm from './BenefitsForm'
import { useBenefitHook } from '../../../../utils/formikHooks/benefitFormik'

function Benefits() {
  const { formik, handleSubmit } = useBenefitHook()
  return <Layout  handleNext={() => handleSubmit(formik.values)} children={<BenefitsForm formik={formik} />} />
}

export default Benefits
