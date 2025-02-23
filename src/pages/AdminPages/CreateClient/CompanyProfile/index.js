import ClientLayout from '../CreateClientLayout'
import CompanyDetailsExtra from '../CompanyDetailsExtra'
import { useCompanyProfileHook } from '../../../../utils/formikHooks/clientFormikHooks/companyProfileFormik'

function CompanyProfile() {
  const { formik, handleSubmit } = useCompanyProfileHook(true)
  return <ClientLayout  handleNext={() => handleSubmit(formik?.values)} children={<CompanyDetailsExtra formik={formik} />} />
}

export default CompanyProfile