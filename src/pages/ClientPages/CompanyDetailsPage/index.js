import { useCompanyDetailsHook } from '../../../utils/formikHooks/clientFormikHooks/companyDetailsFormik'
import StepperClient from '../../../atoms/StepperClient'
import Layout from '../../../components/GeneralComponents/layout'
import Company from './Company'
import { useNavigate } from 'react-router'

const CompanyPage = () => {
  const navigate = useNavigate()
  const { formik, handleSubmit } = useCompanyDetailsHook(false, null, true)

  return (
    <Layout
      variant="progressBar"
      componentLeft={<StepperClient step={1} />}
      componentRight={<Company formik={formik} />}
      nextButtonClick={() => {
        Object.keys(formik.errors).length === 0 && handleSubmit(formik.values)
      }}
      backButtonClick={() => navigate(-1)}
    />
  )
}

export default CompanyPage