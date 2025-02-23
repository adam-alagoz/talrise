import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const CheckboxForm = ({ item, formikValues, formik }) => {
  const isChecked = formikValues?.addedItemsFormik?.includes(item?.id)

  const handleCheckboxChange = () => {
    const ids = [...formikValues?.addedItemsFormik]

    if (isChecked) {
      const index = ids?.indexOf(item?.id)
      if (index !== -1) {
        ids.splice(index, 1)
      }
    } else {
      if (!ids?.includes(item?.id)) {
        ids?.push(item?.id)
      }
    }

    formik.setValues({
      ...formik.values,
      softSkills: {
        ...formik.values.softSkills,
        addedItemsFormik: ids,
      },
    })
  }
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            color="secondary"
            name="addedItemsFormik"
            value={item?.id}
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
        }
        label={item.name}
      />
    </FormGroup>
  )
}

export default CheckboxForm
