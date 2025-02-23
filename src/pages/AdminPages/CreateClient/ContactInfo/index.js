import ClientLayout from '../CreateClientLayout'
import Contacts from '../../../ClientPages/ContactInformationPage/Contacts'
import { useCompanyContactInfoHook } from '../../../../utils/formikHooks/clientFormikHooks/companyContactInfoFormik'

function ContactInfo() {
  const { formik } = useCompanyContactInfoHook(true)
  return (
    <ClientLayout
      handleNext={() => {
        formik?.handleSubmit?.(formik?.values)
      }}
      children={<Contacts formik={formik} />}
    />
  )
}

export default ContactInfo
