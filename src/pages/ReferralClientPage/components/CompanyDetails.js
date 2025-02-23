import { TextField } from '../../../atoms'
import { StyledContainer } from './index.styles'
import Select from '../../../components/SelectItem'
import { useGetCountryPhoneCode, useGetCountry, useGetCity } from '../../../service/API/shared'

const CompanyDetails = ({ formik }) => {
  const { data: countryData } = useGetCountry()
  const { data: phoneCodeData } = useGetCountryPhoneCode()
  const { data: cityData } = useGetCity(formik?.values?.countryId)
  const phoneCodes = phoneCodeData?.data?.map((code) => ({ ...code, name: code, id: code })) ?? []
  return (
    <>
      <TextField
        name="companyName"
        label="Company Name*"
        color="secondary"
        value={formik.values.companyName}
        onChange={formik.handleChange}
        error={formik.touched.companyName && Boolean(formik.errors.companyName)}
        helperText={formik.touched.companyName && formik.errors.companyName}
      />
      <TextField
        name="companyLinkedIn"
        label="Company LinkedIn*"
        color="secondary"
        value={formik.values.companyLinkedIn}
        onChange={formik.handleChange}
        error={formik.touched.companyLinkedIn && Boolean(formik.errors.companyLinkedIn)}
        helperText={formik.touched.companyLinkedIn && formik.errors.companyLinkedIn}
      />
      <TextField
        name="website"
        label="Company Website*"
        color="secondary"
        value={formik.values.website}
        onChange={formik.handleChange}
        error={formik.touched.website && Boolean(formik.errors.website)}
        helperText={formik.touched.website && formik.errors.website}
      />
      <StyledContainer className="locationContainer">
        <Select
          name="countryId"
          label="Country*"
          menuItems={countryData?.data ?? []}
          value={formik.values.countryId}
          handleChange={formik.handleChange}
          error={formik.touched.countryId && Boolean(formik.errors.countryId)}
          helperText={formik.touched.countryId && formik.errors.countryId}
        />
        <Select
          name="locationId"
          label="City*"
          menuItems={cityData?.data ?? []}
          disabled={!formik.values.countryId}
          value={formik.values.countryId ? formik.values.locationId : ''}
          handleChange={formik.handleChange}
          error={formik.touched.locationId && Boolean(formik.errors.locationId)}
          helperText={formik.touched.locationId && formik.errors.locationId}
        />
      </StyledContainer>
      <StyledContainer className="phoneContainer">
        <Select
          name="companyCountryPhoneCode"
          label="Country Code*"
          menuItems={phoneCodes ?? []}
          value={formik.values.companyCountryPhoneCode}
          handleChange={formik.handleChange}
          error={
            formik.touched.companyCountryPhoneCode && Boolean(formik.errors.companyCountryPhoneCode)
          }
          helperText={
            formik.touched.companyCountryPhoneCode && formik.errors.companyCountryPhoneCode
          }
        />
        <TextField
          name="companyMobile"
          label="Mobile*"
          color="secondary"
          value={formik.values.companyMobile}
          onChange={formik.handleChange}
          error={formik.touched.companyMobile && Boolean(formik.errors.companyMobile)}
          helperText={formik.touched.companyMobile && formik.errors.companyMobile}
        />
      </StyledContainer>
    </>
  )
}

export default CompanyDetails
