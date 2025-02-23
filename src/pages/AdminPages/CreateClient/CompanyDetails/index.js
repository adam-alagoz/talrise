import ClientLayout from '../CreateClientLayout'
import { useCompanyDetailsHook } from '../../../../utils/formikHooks/clientFormikHooks/companyDetailsFormik'
import Company from '../../../ClientPages/CompanyDetailsPage/Company'


function CompanyDetails() {
  const { formik, handleSubmit } = useCompanyDetailsHook(true)
  return <ClientLayout  handleNext={() => handleSubmit(formik?.values)} children={<Company formik={formik} />} />
}

export default CompanyDetails
