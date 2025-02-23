import { StyledBody, StyledInsideBody, StyledSubtitle, StyledHeadline, StyledForm, StyledContainer } from './index.styles'
import SelectItem from '../../../components/SelectItem'
//bakilacak
import { useGetCurrency, useGetVisaStatus, useGetContractType, useGetSalaryPreference } from '../../../service/apis'
import { useGetLookUpData } from '../../../service/API/lookup'
import CityWorkType from './CityWorkType'

const PreferencesPage = ({ formik, initialValues }) => {
  const { data: currencyData } = useGetCurrency()
  const { data: visaStatusData } = useGetVisaStatus()
  const { data: contractTypeData } = useGetContractType()
  const { data: salaryPreferenceData } = useGetSalaryPreference()
  const { data: salaryAmountData } = useGetLookUpData('SALARY_AMOUNT')
  if (!currencyData || !visaStatusData || !contractTypeData || !salaryPreferenceData || !salaryAmountData)
    return <div>There is an error</div>

  return (
    <StyledBody>
      <StyledInsideBody>
        <StyledContainer className="text-example">
          <StyledHeadline type="Headline2">Preferences</StyledHeadline>
          <StyledSubtitle type="Subtitle1">Please add your location preferences and salary expectation.</StyledSubtitle>
        </StyledContainer>
        <StyledForm onSubmit={formik.handleSubmit}>
          <CityWorkType formik={formik} initialValues={initialValues} />

          <hr />
          <StyledContainer className="containerBox">
            <SelectItem
              value={formik.values.contractTypeId}
              type="text"
              label="Contract Type"
              name={'contractTypeId'}
              menuItems={contractTypeData?.data}
              variant="outlined"
              defaultValue=""
              handleChange={formik.handleChange}
              helperText={formik.touched.contractTypeId && formik.errors.contractTypeId}
              error={formik.touched.contractTypeId && Boolean(formik.errors.contractTypeId)}
            />
            <SelectItem
              disabled={!formik.values.contractTypeId}
              value={formik.values.contractTypeId ? formik.values.salaryPreferenceId : ''}
              type="text"
              label="Salary Preference"
              name={'salaryPreferenceId'}
              menuItems={salaryPreferenceData?.data ?? []}
              variant="outlined"
              defaultValue=""
              handleChange={formik.handleChange}
              helperText={formik.touched.salaryPreferenceId && formik.errors.salaryPreferenceId}
              error={formik.touched.salaryPreferenceId && Boolean(formik.errors.salaryPreferenceId)}
            />
          </StyledContainer>
          <StyledContainer className="containerBox">
            <SelectItem
              value={formik.values.minExpectedAmount || ''}
              type="salary"
              label="Minimum Expected Salary"
              name={'minExpectedAmount'}
              menuItems={salaryAmountData?.data}
              variant="outlined"
              defaultValue=""
              handleChange={formik.handleChange}
              helperText={formik.touched.minExpectedAmount && formik.errors.minExpectedAmount}
              error={formik.touched.minExpectedAmount && Boolean(formik.errors.minExpectedAmount)}
            />
            <SelectItem
              value={formik.values.currencyId}
              type="text"
              label="Currency"
              name={'currencyId'}
              menuItems={currencyData?.data}
              variant="outlined"
              defaultValue=""
              handleChange={formik.handleChange}
              helperText={formik.touched.currencyId && formik.errors.currencyId}
              error={formik.touched.currencyId && Boolean(formik.errors.currencyId)}
            />
          </StyledContainer>
          <hr />

          <StyledContainer className="containerBox">
            <SelectItem
              value={formik.values.visaStatusId}
              type="text"
              label="What is your visa status?"
              name={'visaStatusId'}
              menuItems={visaStatusData?.data}
              variant="outlined"
              defaultValue=""
              handleChange={formik.handleChange}
              helperText={formik.touched.visaStatusId && formik.errors.visaStatusId}
              error={formik.touched.visaStatusId && Boolean(formik.errors.visaStatusId)}
            />
          </StyledContainer>
        </StyledForm>
      </StyledInsideBody>
    </StyledBody>
  )
}

export default PreferencesPage
