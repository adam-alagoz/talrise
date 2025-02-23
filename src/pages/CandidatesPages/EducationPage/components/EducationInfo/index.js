import React, { useState } from 'react'
import Select from '../../../../../components/SelectItem'
import { StyledContainer, AtomicButton, StyledAutocomplete } from './index.styles'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FieldArray, FormikProvider, getIn } from 'formik'
import { FormGroup, FormHelperText, TextField } from '@mui/material'
import { useGetLookUpData } from '../../../../../service/API/lookup'
import { useGetUniversity } from '../../../../../service/API/shared'

const EducationInfo = ({ formik }) => {
  const [educationText, setEducationText] = useState('')
  const { data: degree } = useGetLookUpData('DEGREE')
  const { data: department } = useGetLookUpData('DEPARTMENT')
  const { data: university } = useGetUniversity({ name: educationText })

  const initialEducationValues = {
    universityId: '',
    degreeId: '',
    departmentId: '',
    startYear: '',
    endYear: '',
  }
  const deleteEducation = (arrayHelpers, index, e) => {
    e.preventDefault()

    if (formik.values.educations.length > 1) {
      arrayHelpers.remove(index)
    } else {
      if (index === 0) {
        arrayHelpers.replace(index, initialEducationValues)
      } else {
        arrayHelpers.remove(index)
      }
    }
  }

  const isDeleteButtonVisible = (index) => {
    return (
      formik.values.educations.length > 1 ||
      index !== 0 ||
      !!Object.values(formik.values.educations[index]).find((value) => value !== '')
    )
  }

  const newDateArray = Array(63)
    .fill()
    .map((_, idx) => {
      const dateInString = (new Date().getFullYear() - idx).toString()
      return { name: dateInString, id: dateInString }
    })

  const endYear = (startYear) => {
    return newDateArray.filter((date) => parseInt(date.id) >= parseInt(startYear))
  }

  const addFormHandler = (e, arrayHelpers) => {
    e.preventDefault()
    arrayHelpers.push(initialEducationValues)
  }

  if (!university) return

  return (
    <StyledContainer>
      <FormikProvider value={formik}>
        <FieldArray
          name="educations"
          render={(arrayHelpers) => (
            <div>
              {formik?.values?.educations?.map((_educationInfo, index) => {
                const universityError = getIn(formik.errors, `educations[${index}].universityId`)
                const universityTouched = getIn(formik.touched, `educations[${index}].universityId`)
                const degreeError = getIn(formik.errors, `educations[${index}].degreeId`)
                const degreeTouched = getIn(formik.touched, `educations[${index}].degreeId`)
                const departmentError = getIn(formik.errors, `educations[${index}].departmentId`)
                const departmentTouched = getIn(formik.touched, `educations[${index}].departmentId`)
                const startYearError = getIn(formik.errors, `educations[${index}].startYear`)
                const startYearTouched = getIn(formik.touched, `educations[${index}].startYear`)

                return (
                  <div key={index}>
                    <div>{arrayHelpers.form.values.educations.length > 1 && index !== 0 && <hr></hr>}</div>
                    <StyledContainer className="btn-delete-container">
                      {isDeleteButtonVisible(index) && (
                        <AtomicButton
                          className="btn-delete"
                          variant="text"
                          type="submit"
                          icon={<RiDeleteBinLine />}
                          handleClick={(e) => deleteEducation(arrayHelpers, index, e)}
                          label="Delete"
                        />
                      )}
                    </StyledContainer>
                    <FormGroup>
                      <StyledContainer className="containerBox first">
                        <StyledAutocomplete
                          disableClearable
                          id="university"
                          className="degree"
                          options={
                            university?.data
                              ? [
                                  ...university?.data
                                    ?.map((o) => ({ label: o.name, id: o.id }))
                                    .filter((item) => item.id !== 176),
                                  { label: 'Other', id: 176 },
                                ]
                              : []
                          }
                          isOptionEqualToValue={(option, value) => option.value === value.value}
                          name={`educations[${index}].universityId`}
                          value={
                            formik?.values?.educations?.[index]?.universityId
                              ? university?.data?.find((item) => item.id === formik?.values?.educations?.[index]?.universityId)
                                  ?.name
                              : ''
                          }
                          onChange={(event, newValue) => {
                            formik.setFieldValue(`educations[${index}].universityId`, newValue.id)
                          }}
                          onInputChange={(event, newInputValue) => {
                            setEducationText(newInputValue)
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="University*"
                              value={educationText}
                              helperText={universityTouched && universityError}
                              error={universityTouched && Boolean(universityError)}
                            />
                          )}
                          color="secondary"
                        />
                        <Select
                          className="degree"
                          label="Degree*"
                          menuItems={degree?.data}
                          name={`educations[${index}].degreeId`}
                          value={formik.values.educations[index].degreeId}
                          handleChange={formik.handleChange}
                          color="secondary"
                          error={degreeTouched && Boolean(degreeError)}
                          helperText={degreeTouched && degreeError}
                        />
                      </StyledContainer>
                      <StyledContainer className="containerBox">
                        <Select
                          label="Department*"
                          menuItems={department?.data}
                          name={`educations[${index}].departmentId`}
                          value={formik.values.educations[index].departmentId}
                          handleChange={formik.handleChange}
                          color="secondary"
                          error={departmentTouched && Boolean(departmentError)}
                          helperText={departmentTouched && departmentError}
                        />
                        <Select
                          label="Start Year*"
                          menuItems={newDateArray}
                          name={`educations[${index}].startYear`}
                          value={formik.values.educations[index].startYear}
                          handleChange={formik.handleChange}
                          color="secondary"
                          error={startYearTouched && Boolean(startYearError)}
                          MenuProps={{
                            style: {
                              maxHeight: 200,
                            },
                          }}
                          helperText={startYearTouched && startYearError}
                        />
                        <Select
                          label="End Year"
                          disabled={!formik.values.educations[index].startYear}
                          menuItems={
                            formik.values.educations[index].startYear
                              ? endYear(formik.values.educations[index].startYear)
                              : newDateArray
                          }
                          name={`educations[${index}].endYear`}
                          value={formik.values.educations[index].startYear ? formik.values.educations[index].endYear : ''}
                          handleChange={formik.handleChange}
                          color="secondary"
                          error={formik.errors.endYear}
                          MenuProps={{
                            style: {
                              maxHeight: 200,
                            },
                          }}
                        />
                        <FormHelperText error>{formik.errors.endYear}</FormHelperText>
                      </StyledContainer>
                    </FormGroup>
                  </div>
                )
              })}
              <AtomicButton
                className="addEdu"
                variant="contained"
                type="submit"
                handleClick={(e) => formik.isValid && addFormHandler(e, arrayHelpers)}
                label="+ ADD EDUCATION"
              />
            </div>
          )}
        />
      </FormikProvider>
    </StyledContainer>
  )
}

export default EducationInfo
