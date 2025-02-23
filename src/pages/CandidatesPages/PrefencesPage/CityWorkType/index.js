import { StyledContainer, AtomicButton } from './index.styles'
import { RiDeleteBinLine } from 'react-icons/ri'
import Select from '../../../../components/SelectItem'
import { FieldArray, FormikProvider, getIn } from 'formik'
import { FormGroup } from '@mui/material'
import { useGetCountry, useGetCity } from '../../../../service/API/shared'
import { useGetLookUpData } from '../../../../service/API/lookup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
const CityWorkType = ({ formik, initialValues }) => {
  const { data: countryData } = useGetCountry()
  const [lastIndex, setLastIndex] = useState(0)
  const { data: cityData } = useGetCity(formik?.values?.locations[lastIndex]?.countryId)
  const { data: workTypeData } = useGetLookUpData('WORK_PLACE')

  const deleteCityWorkTypes = (e, arrayHelpers, index) => {
    e.preventDefault()
    if (formik.values.locations.length > 1) {
      arrayHelpers.remove(index)
    } else {
      if (index === 0) {
        arrayHelpers.replace(index, initialValues)
      } else {
        arrayHelpers.remove(index)
      }
    }
  }

  const isDeleteButtonVisible = (index) => {
    return (
      formik.values.locations.length > 1 ||
      index !== 0 ||
      Object.values(formik.values.locations[0]).find((value) => value !== '' || value !== []) ||
      formik.values.locations[0].workPlaceIds.length > 0
    )
  }

  const handleAdd = (e, arrayHelpers) => {
    e.preventDefault()
    const lastForm = formik.values.locations.slice(-1)[0]

    const isAnyFieldEmpty = Object.values(lastForm).some((value) => (Array.isArray(value) ? value.length === 0 : !value))

    if (isAnyFieldEmpty) {
      toast.error('Please complete the existing form before adding a new one.')
    } else {
      arrayHelpers.push(initialValues)
    }
  }

  useEffect(() => {
    if (cityData && formik?.values?.locations[lastIndex]?.countryId) {
      let locationData = [...formik.values.locations]
      locationData[lastIndex] = { ...locationData[lastIndex], citySelect: cityData?.data }
      formik.setValues({ ...formik?.values, locations: [...locationData] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityData, lastIndex])

  if (!countryData || !workTypeData) return
  return (
    <StyledContainer>
      <FormikProvider value={formik}>
        <FieldArray
          name="locations"
          render={(arrayHelpers) => (
            <div>
              {formik?.values?.locations?.map((_cityWorkTypesInfo, index) => {
                const countryError = getIn(formik.errors, `locations[${index}].countryId`)
                const countryTouched = getIn(formik.touched, `locations[${index}].countryId`)
                const cityError = getIn(formik.errors, `locations[${index}].cityId`)
                const cityTouched = getIn(formik.touched, `locations[${index}].cityId`)
                const workPlaceError = getIn(formik.errors, `locations[${index}].workPlaceIds`)
                const workPlaceTouched = getIn(formik.touched, `locations[${index}].workPlaceIds`)

                return (
                  <div key={index}>
                    <div>{formik?.values?.locations?.length > 1 && index !== 0 && <hr></hr>}</div>
                    <StyledContainer className="btn-delete-container">
                      {isDeleteButtonVisible(index) && (
                        <AtomicButton
                          className="btn-delete"
                          variant="text"
                          icon={<RiDeleteBinLine />}
                          handleClick={(e) => deleteCityWorkTypes(e, arrayHelpers, index)}
                          label="Delete"
                        />
                      )}
                    </StyledContainer>
                    <FormGroup>
                      <StyledContainer className="containerBox">
                        <Select
                          type="text"
                          label="Country"
                          menuItems={countryData?.data ?? []}
                          variant="outlined"
                          noneOption={true}
                          name={`locations[${index}].countryId`}
                          value={formik.values.locations[index].countryId}
                          handleChange={formik.handleChange}
                          onClick={() => setLastIndex(index)}
                          helperText={countryTouched && countryError}
                          error={countryTouched && Boolean(countryError)}
                        />
                        <Select
                          type="text"
                          label="City"
                          noneOption={true}
                          name={`locations[${index}].cityId`}
                          menuItems={formik.values.locations[index].citySelect}
                          disabled={!formik.values.locations[index].countryId}
                          value={formik.values.locations[index].countryId ? formik.values.locations[index].cityId : ''}
                          variant="outlined"
                          handleChange={formik.handleChange}
                          helperText={cityTouched && cityError}
                          error={cityTouched && Boolean(cityError)}
                        />
                        <Select
                          name={`locations[${index}].workPlaceIds`}
                          className="workTypeId"
                          label="Workplace"
                          multiple={true}
                          // menuItems={formik.values.locations[index].workPlaceIds || workTypeData.data}
                          menuItems={workTypeData?.data}
                          value={formik.values.locations[index].workPlaceIds}
                          handleChange={formik.handleChange}
                          helperText={workPlaceTouched && workPlaceError}
                          error={workPlaceTouched && Boolean(workPlaceError)}
                        />
                      </StyledContainer>
                    </FormGroup>
                  </div>
                )
              })}
              <AtomicButton
                className="addLocation"
                variant="contained"
                handleClick={(e) => handleAdd(e, arrayHelpers)}
                label="+   ADD"
              />
            </div>
          )}
        />
      </FormikProvider>
    </StyledContainer>
  )
}

export default CityWorkType
