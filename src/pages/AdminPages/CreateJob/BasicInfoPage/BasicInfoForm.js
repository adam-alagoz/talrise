import React from 'react'
import { PersonalContainer, StyledForm, StyledTextField, Wrapper } from './index.styles'
import SelectItem from '../../../../components/SelectItem'
import { useGetCity, useGetCountry } from '../../../../service/API/shared'
import DatePicker from '../../../../atoms/DatePicker'
import { useGetLookUpData } from '../../../../service/API/lookup'
import { Grid } from '@mui/material'
import Loading from '../../../LoadingPage'
import NotFoundPage from '../../../GeneralPages/Page404/NotFoundPage'
import { useGetContractType, useGetSalaryPreference } from '../../../../service/apis'
import { Text } from '../../../../atoms'

function BasicInfoForm({ formik }) {
  const { data: countryData, isLoading: countryLoading, isError: countryError } = useGetCountry()
  const { data: languageList, isLoading: languageLoading, isError: languageError } = useGetLookUpData('LANGUAGE')
  const { data: positionList, isLoading: positionLoading, isError: positionError } = useGetLookUpData('POSITION')
  const { data: contractType, isLoading: contractLoading, isError: contractError } = useGetContractType()
  const { data: currencyList, isLoading: currencyLoading, isError: currencyError } = useGetLookUpData('CURRENCY')
  const { data: workPlaceList, isLoading: workplaceLoading, isError: workPlaceError } = useGetLookUpData('WORK_PLACE')
  const { data: employmentTypeList, isLoading: employmentLoading, isError: employmentError } = useGetLookUpData('EMPLOYMENT_TYPE')
  const { data: salary, isLoading: salaryLoading, isError: salaryError } = useGetSalaryPreference(formik?.values?.contractTypeId)
  const { data: cityData } = useGetCity(formik?.values?.countryId)
  const { data: salaryAmountData } = useGetLookUpData('SALARY_AMOUNT')
  if (
    countryLoading ||
    languageLoading ||
    positionLoading ||
    contractLoading ||
    currencyLoading ||
    workplaceLoading ||
    employmentLoading ||
    (formik?.values?.contractTypeId && salaryLoading)
  ) {
    return <Loading />
  }

  if (
    countryError ||
    languageError ||
    positionError ||
    contractError ||
    currencyError ||
    salaryError ||
    workPlaceError ||
    employmentError
  ) {
    return <NotFoundPage />
  }

  return (
    <PersonalContainer>
      <Text display="block" type="Headline1">
        Basics
      </Text>
      <StyledForm>
        <Wrapper>
          <SelectItem
            menuItems={positionList?.data}
            type="text"
            label="Position Name*"
            variant="outlined"
            name="positionId"
            value={formik.values.positionId}
            handleChange={formik.handleChange}
            error={formik?.touched?.positionId && Boolean(formik?.errors?.positionId)}
            helperText={formik.touched.positionId && formik.errors.positionId}
          />
          <SelectItem
            menuItems={employmentTypeList?.data}
            type="text"
            label="Employment Type*"
            variant="outlined"
            name="employmentTypeId"
            value={formik.values.employmentTypeId}
            handleChange={formik.handleChange}
            error={formik.touched.positionId && Boolean(formik.errors.employmentTypeId)}
            helperText={formik.touched.positionId && formik.errors.employmentTypeId}
          />
        </Wrapper>
        <Wrapper>
          <StyledTextField
            type="text"
            label="Job Title*"
            variant="outlined"
            name="jobTitle"
            onChange={formik.handleChange}
            value={formik.values.jobTitle}
            error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
            helperText={formik.touched.jobTitle && formik.errors.jobTitle}
          />
          <DatePicker
            color="secondary"
            label="Application Closing Date*"
            views={['year', 'month', 'day']}
            openTo="month"
            name="expectedClosureDate"
            inputFormat="DD.MM.YYYY"
            value={formik.values.expectedClosureDate}
            disablePast
            onChange={(newValue) => {
              let startDate = new Date(newValue.$d)
              formik.setFieldValue('expectedClosureDate', startDate)
            }}
            error={formik.touched.expectedClosureDate && Boolean(formik.errors.expectedClosureDate)}
            helperText={formik.touched.expectedClosureDate && formik.errors.expectedClosureDate}
          />
        </Wrapper>
        <Wrapper>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={3}>
              <SelectItem
                menuItems={countryData?.data}
                type="text"
                label="Country*"
                variant="outlined"
                name="countryId"
                value={formik?.values?.countryId}
                handleChange={formik.handleChange}
                error={formik.touched.countryId && Boolean(formik.errors.countryId)}
                helperText={formik.touched.countryId && formik.errors.countryId}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <SelectItem
                menuItems={cityData?.data}
                type="text"
                label="City*"
                variant="outlined"
                name="cityId"
                value={formik.values.countryId ? formik.values.cityId : ''}
                handleChange={formik.handleChange}
                error={formik.touched.cityId && Boolean(formik.errors.cityId)}
                helperText={formik.touched.cityId && formik.errors.cityId}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <DatePicker
                color="secondary"
                label="Expected Start Date*"
                views={['year', 'month', 'day']}
                openTo="month"
                name="expectedStartDate"
                inputFormat="DD.MM.YYYY"
                disablePast
                value={formik.values.expectedStartDate}
                onChange={(newValue) => {
                  let startDate = new Date(newValue.$d)
                  formik.setFieldValue('expectedStartDate', startDate)
                }}
                error={formik.touched.expectedStartDate && Boolean(formik.errors.expectedStartDate)}
                helperText={formik.touched.expectedStartDate && formik.errors.expectedStartDate}
              />
            </Grid>
          </Grid>
        </Wrapper>

        <Wrapper>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <SelectItem
                menuItems={contractType?.data}
                className="contractType"
                type="text"
                label="Contract Type*"
                variant="outlined"
                name="contractTypeId"
                value={formik.values.contractTypeId}
                handleChange={formik.handleChange}
                error={formik.touched.contractTypeId && Boolean(formik.errors.contractTypeId)}
                helperText={formik.touched.contractTypeId && formik.errors.contractTypeId}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectItem
                menuItems={salary?.data}
                className="salary"
                type="text"
                label="Salary Preference*"
                variant="outlined"
                name="salaryPreferenceId"
                disabled={!formik.values.contractTypeId}
                value={formik.values.salaryPreferenceId}
                handleChange={formik.handleChange}
                error={formik.touched.salaryPreferenceId && Boolean(formik.errors.salaryPreferenceId)}
                helperText={formik.touched.salaryPreferenceId && formik.errors.salaryPreferenceId}
              />
            </Grid>
          </Grid>
        </Wrapper>
        <Wrapper className="phone">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <SelectItem
                menuItems={workPlaceList?.data}
                type="text"
                label="Work Place*"
                variant="outlined"
                name="workPlaceIds"
                multiple={true}
                value={formik.values.workPlaceIds}
                handleChange={formik.handleChange}
                error={formik.touched.workPlaceIds && Boolean(formik.errors.workPlaceIds)}
                helperText={formik.touched.workPlaceIds && formik.errors.workPlaceIds}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <SelectItem
                menuItems={salaryAmountData?.data}
                type="text"
                label="Salary*"
                variant="outlined"
                name="salaryAmountId"
                value={formik.values.salaryAmountId}
                handleChange={formik.handleChange}
                error={formik.touched.salaryAmountId && Boolean(formik.errors.salaryAmountId)}
                helperText={formik.touched.salaryAmountId && formik.errors.salaryAmountId}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <SelectItem
                menuItems={currencyList?.data}
                className="currency"
                type="text"
                label="Currency*"
                variant="outlined"
                name="currencyId"
                value={formik.values.currencyId}
                handleChange={formik.handleChange}
                error={formik.touched.currencyId && Boolean(formik.errors.currencyId)}
                helperText={formik.touched.currencyId && formik.errors.currencyId}
              />
            </Grid>
          </Grid>
        </Wrapper>
        <Wrapper>
          <Grid container spacing={4}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <SelectItem
                menuItems={languageList?.data}
                type="text"
                label="Language*"
                multiple={true}
                variant="outlined"
                name="languageIds"
                value={formik.values.languageIds}
                handleChange={formik.handleChange}
                error={formik.touched.languageIds && Boolean(formik.errors.languageIds)}
                helperText={formik.touched.languageIds && formik.errors.languageIds}
              />
            </Grid>
          </Grid>
        </Wrapper>
      </StyledForm>
    </PersonalContainer>
  )
}

export default BasicInfoForm
