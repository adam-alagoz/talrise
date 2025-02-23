import { Text, TextField } from '../../../../atoms'
import {
  StyledFormContainer,
  StyledContainer,
  StyledInputContainer,
  StyledSelectedTool,
  AtomicButton,
  StyledToolsContainer,
  StyledCheckBoxContainer,
  StyledTooltip,
} from './index.styles'
import Select from '../../../../components/SelectItem'
import { Checkbox, FormControlLabel, FormGroup, InputAdornment } from '@mui/material'
import { MdOutlineAdd } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FieldArray, FormikProvider, getIn } from 'formik'
import { useGetLookUpData } from '../../../../service/API/lookup'

import { useGetTools } from '../../../../service/API/candidate'

import DatePicker from '../../../../atoms/DatePicker'
import { useUser } from '../../../../redux/hooks'
import { Fragment, useEffect, useRef } from 'react'
import { useGetContractType } from '../../../../service/apis'

const ExperienceForm = ({ formik }) => {
  const arrayHelpersRef = useRef(null)
  const { data: contractType } = useGetContractType()
  const { data: workPlace } = useGetLookUpData('WORK_PLACE')
  const { data: noticePeriod } = useGetLookUpData('NOTICE_PERIOD')
  const { candidateUserInfo } = useUser()
  const { data: tools } = useGetTools(candidateUserInfo.toolRefetchKey)

  const toolsGuideText =
    'The tools here are retrieved from the Skill Set step. If you want to add more, please go to the aforementioned step on the left.'

  const experienceFormData = {
    company: '',
    contractTypeId: '',
    endDate: null,
    explanation: '',
    noticePeriodId: '',
    startDate: null,
    stillWorking: false,
    title: '',
    toolIds: [],
    workPlaceId: '',
  }

  const isDeleteButtonVisible = (index) => {
    return (
      formik.values.experiences?.length > 1 ||
      index !== 0 ||
      Object.values(formik.values.experiences[0]).find((value) => {
        return (
          (value !== '' && typeof value === 'string') ||
          (value !== '' && typeof value === 'number') ||
          (value && value instanceof Date)
        )
      }) ||
      formik.values.experiences[0].toolIds.length > 0 ||
      formik.values.experiences[0].stillWorking
    )
  }
  const addFormHandler = (e, arrayHelpers) => {
    e.preventDefault()
    arrayHelpers.push(experienceFormData)
  }
  const removeFormHandler = (e, arrayHelpers, index) => {
    e.preventDefault()
    if (formik.values.experiences.length > 1) {
      arrayHelpers.remove(index)
    } else {
      if (index === 0) {
        arrayHelpers.replace(index, experienceFormData)
      } else {
        arrayHelpers.remove(index)
      }
    }
  }

  const handleRemoveTool = (e, index, arrayHelpers) => {
    e.preventDefault()
    arrayHelpers.remove(index)
  }

  useEffect(() => {
    if (!candidateUserInfo?.experiences) {
      formik.values.experiences.map((experience) => {
        experience.toolIds.map((toolId) => {
          !tools?.data.includes(toolId) && arrayHelpersRef.current.remove(experience.toolIds.indexOf(toolId))
          return toolId
        })
        return experience
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tools?.data])

  return (
    <StyledFormContainer>
      <FormikProvider value={formik}>
        <FieldArray
          name="experiences"
          render={(arrayHelpers) => (
            <div>
              {formik.values.experiences.map((_experience, index) => {
                const titleError = getIn(formik.errors, `experiences[${index}].title`)
                const titleTouched = getIn(formik.touched, `experiences[${index}].title`)
                const companyError = getIn(formik.errors, `experiences[${index}].company`)
                const companyTouched = getIn(formik.touched, `experiences[${index}].company`)
                const startDateError = getIn(formik.errors, `experiences[${index}].startDate`)
                const startDateTouched = getIn(formik.touched, `experiences[${index}].startDate`)
                const endDateError = getIn(formik.errors, `experiences[${index}].endDate`)
                const endDateTouched = getIn(formik.touched, `experiences[${index}].endDate`)
                const noticePeriodError = getIn(formik.errors, `experiences[${index}].noticePeriodId`)
                const noticePeriodTouched = getIn(formik.touched, `experiences[${index}].noticePeriodId`)
                const toolsError = getIn(formik.errors, `experiences[${index}].toolIds`)
                const toolsTouched = getIn(formik.touched, `experiences[${index}].toolIds`)

                return (
                  <div key={`${index}-experience`}>
                    {formik.values.experiences.length > 1 && index !== 0 && (
                      <div className="line">
                        <hr />
                      </div>
                    )}
                    <StyledContainer className="delete">
                      {isDeleteButtonVisible(index) && (
                        <AtomicButton
                          className="delete"
                          variant="text"
                          icon={<RiDeleteBinLine />}
                          size="small"
                          handleClick={(e) => removeFormHandler(e, arrayHelpers, index)}
                          label="Delete"
                        />
                      )}
                    </StyledContainer>
                    <StyledInputContainer>
                      <TextField
                        id="title"
                        className="title"
                        mainClass="title"
                        name={`experiences[${index}].title`}
                        label="Title*"
                        color="secondary"
                        value={formik.values.experiences[index].title}
                        onChange={formik.handleChange}
                        error={titleTouched && Boolean(titleError)}
                        helperText={titleTouched && titleError}
                      />
                      <TextField
                        id="company"
                        className="company"
                        mainClass="company"
                        name={`experiences[${index}].company`}
                        label="Company*"
                        color="secondary"
                        value={formik.values.experiences[index].company}
                        onChange={formik.handleChange}
                        error={companyTouched && Boolean(companyError)}
                        helperText={companyTouched && companyError}
                      />
                    </StyledInputContainer>
                    <StyledInputContainer>
                      <Select
                        name={`experiences[${index}].contractTypeId`}
                        className="contractTypeId"
                        label="Contract Type"
                        menuItems={contractType?.data}
                        noneOption={true}
                        value={formik.values.experiences[index].contractTypeId}
                        handleChange={formik.handleChange}
                      />
                      <Select
                        name={`experiences[${index}].workPlaceId`}
                        className="workPlaceId"
                        label="Workplace"
                        menuItems={workPlace?.data}
                        noneOption={true}
                        value={formik.values.experiences[index].workPlaceId}
                        handleChange={formik.handleChange}
                      />
                    </StyledInputContainer>
                    <StyledInputContainer>
                      <DatePicker
                        id="startDate"
                        className="startDate"
                        mainClass="startDate"
                        color="secondary"
                        name={`experiences[${index}].startDate`}
                        label="Start Date*"
                        views={['year', 'month']}
                        openTo="month"
                        inputFormat="MM.YYYY"
                        value={formik.values.experiences[index].startDate}
                        onChange={(newValue) => {
                          let startDate = new Date(newValue.$d)
                          formik.setFieldValue(`experiences[${index}].startDate`, startDate)
                        }}
                        error={startDateTouched && Boolean(startDateError)}
                        helperText={startDateTouched && startDateError}
                      />
                      <DatePicker
                        id="endDate"
                        className="endDate"
                        mainClass="endDate"
                        color="secondary"
                        name={`experiences[${index}].endDate`}
                        label={formik.values.experiences[index].stillWorking ? 'End Date' : 'End Date*'}
                        displayStaticWrapperAs="desktop"
                        views={['year', 'month']}
                        openTo="month"
                        inputFormat="MM.YYYY"
                        disabled={!formik.values.experiences[index].startDate || formik.values.experiences[index].stillWorking}
                        value={formik.values.experiences[index].endDate}
                        onChange={(newValue) => {
                          let endDate = new Date(newValue.$d)
                          formik.setFieldValue(`experiences[${index}].endDate`, endDate)
                        }}
                        error={endDateTouched && Boolean(endDateError)}
                        helperText={endDateTouched && endDateError}
                      />
                      {formik.values.experiences[index].stillWorking && (
                        <Select
                          name={`experiences[${index}].noticePeriodId`}
                          className="noticePeriodId"
                          label="Notice Period*"
                          menuItems={noticePeriod?.data}
                          value={formik.values.experiences[index].noticePeriodId}
                          handleChange={formik.handleChange}
                          error={noticePeriodTouched && Boolean(noticePeriodError)}
                          helperText={noticePeriodTouched && noticePeriodError}
                        />
                      )}
                    </StyledInputContainer>
                    <StyledCheckBoxContainer>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="secondary"
                              checked={formik.values.experiences[index].stillWorking}
                              value={formik.values.experiences[index].stillWorking}
                              onChange={(e) => {
                                e.preventDefault()
                                formik.setFieldValue(`experiences[${index}].stillWorking`, e.target.checked)
                                if (e.target.checked === true) {
                                  formik.setFieldValue(`experiences[${index}].endDate`, null)
                                }
                                if (e.target.checked === false) {
                                  formik.setFieldValue(`experiences[${index}].noticePeriodId`, '')
                                }
                              }}
                            />
                          }
                          label={
                            <Text className="experience-stillWorking-text" type="Caption">
                              I am currently working in this position.
                            </Text>
                          }
                          name={`experiences[${index}].stillWorking`}
                        />
                      </FormGroup>
                    </StyledCheckBoxContainer>
                    <StyledTooltip
                      title={toolsGuideText}
                      followCursor
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: '#9426AF',
                            fontFamily: 'DM Sans',
                          },
                        },
                      }}
                    >
                      <StyledContainer className="experience-subtitle-container">
                        <Text className="experience-subtitle" type="Subtitle1">
                          Please choose all the skill sets you used while working in this position.*
                        </Text>
                      </StyledContainer>
                    </StyledTooltip>
                    <StyledContainer>
                      <FieldArray
                        name={`experiences[${index}].toolIds`}
                        render={(arrayHelpers) => {
                          arrayHelpersRef.current = arrayHelpers
                          return (
                            <>
                              <StyledToolsContainer>
                                <Select
                                  className="toolIds"
                                  name={`experiences[${index}].toolIds`}
                                  menuItems={tools?.data}
                                  multiple={true}
                                  value={formik.values.experiences[index].toolIds}
                                  handleChange={formik.handleChange}
                                  error={toolsTouched && Boolean(toolsError)}
                                  helperText={toolsTouched && toolsError}
                                />
                              </StyledToolsContainer>
                              <StyledContainer className="toolsAdded">
                                {tools?.data.map((item) => {
                                  return (
                                    <Fragment key={`${item.id}-${item.name}`}>
                                      {formik.values.experiences[index].toolIds.map((toolId, index) => {
                                        return (
                                          item.id === toolId && (
                                            <StyledContainer className="toolsSelected" key={item.id}>
                                              <StyledSelectedTool value={toolId}>{item.name}</StyledSelectedTool>
                                              <AtomicButton
                                                className="close"
                                                variant="text"
                                                handleClick={(e) => handleRemoveTool(e, index, arrayHelpers)}
                                                label="x"
                                              />
                                            </StyledContainer>
                                          )
                                        )
                                      })}
                                    </Fragment>
                                  )
                                })}
                              </StyledContainer>
                            </>
                          )
                        }}
                      />
                    </StyledContainer>
                    <StyledContainer>
                      <TextField
                        id="explanationText"
                        mainClass="explanation"
                        name={`experiences[${index}].explanation`}
                        color="secondary"
                        multiline
                        rows={3}
                        placeholder="Type to add more information."
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {!formik.values.experiences[index].explanation && (
                                <Text type="Caption" className="explanationAdornment">
                                  Max 500 characters
                                </Text>
                              )}
                            </InputAdornment>
                          ),
                        }}
                        inputProps={{ maxLength: 500, style: { fontFamily: 'DM Sans' } }}
                        value={formik.values.experiences[index].explanation}
                        onChange={formik.handleChange}
                      />
                    </StyledContainer>
                  </div>
                )
              })}
              <StyledContainer>
                <AtomicButton
                  className="btn-add"
                  variant="contained"
                  icon={<MdOutlineAdd />}
                  handleClick={(e) => formik.isValid && addFormHandler(e, arrayHelpers)}
                  label="ADD MORE EXPERIENCE"
                />
              </StyledContainer>
            </div>
          )}
        />
      </FormikProvider>
    </StyledFormContainer>
  )
}

export default ExperienceForm
