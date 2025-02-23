import { Checkbox, FormControlLabel } from '@mui/material'

import { Text } from '../../atoms'

function SingleItem({ formik, item, interview }) {
  const isChecked = interview ? formik?.values?.processIds?.includes(item.id) : formik?.values?.benefitIds?.includes(item.id)
 
  const handleChange = () => {
    const ids = interview ? [...formik.values.processIds] : [...formik.values.benefitIds]
    if (isChecked) {
      const index = ids.indexOf(item.id);
      if (index !== -1) {
        ids.splice(index, 1);
      }
    } else {
      if (!ids.includes(item.id)) {
        ids.push(item.id);
      }
    }
    formik.setFieldValue(`${interview ? "processIds" : "benefitIds"}`, ids);
  };
  return (
    <FormControlLabel
      control={<Checkbox color="secondary" onChange={handleChange} value={item?.id} checked={isChecked}  name="processIds" />}
      label={<Text type="Body2">{item.name}</Text>}
    />
  )
}

export default SingleItem
