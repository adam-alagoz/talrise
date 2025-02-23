import { useGetLookUpData } from '../../../../service/API/lookup'
import CheckBoxAndText from '../../../../components/CheckboxANDText'

function BenefitsForm({ formik }) {
  const data = useGetLookUpData('BENEFIT')
  const newData = data?.data?.data.filter((item) => item.id >= 255 && item.id < 546)

  return <CheckBoxAndText headLine="Benefits" subTitle="Please choose one or more benefits." data={newData} formik={formik} />
}

export default BenefitsForm
