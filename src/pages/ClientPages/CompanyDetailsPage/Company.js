import { CompanyContainer, Wrapper, StyledForm } from './index.styles'
import { Text, TextField } from '../../../atoms'
import SelectItem from '../../../components/SelectItem'
import { useGetCountry, useGetCity } from '../../../service/API/shared'

import { useGetLookUpData } from '../../../service/API/lookup'

const Company = ({ formik }) => {
  const { data: countryData } = useGetCountry()
  const { data: cityData } = useGetCity(formik?.values?.countryId)
  const { data: industry } = useGetLookUpData('INDUSTRY')
  const { data: companySize } = useGetLookUpData('COMPANY_SIZE')
  const { data: workPlace } = useGetLookUpData('WORK_PLACE')

  return (
    <CompanyContainer>
      <Text display="block" className="headline" type="Headline2">
        Company Details
      </Text>
      <Text display="block" className="text-basic" type="Subtitle1">
        Please provide some details about your company.
      </Text>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Wrapper>
          <TextField
            type="text"
            label="Company Name"
            variant="outlined"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.companyName)}
            helperText={formik.errors.companyName}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="Company Linkedin"
            variant="outlined"
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.linkedin)}
            helperText={formik.errors.linkedin}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="Company Website"
            variant="outlined"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.website)}
            helperText={formik.errors.website}
          />
        </Wrapper>
        <Wrapper>
          <SelectItem
            menuItems={countryData?.data}
            type="text"
            label="Country"
            variant="outlined"
            name="countryId"
            value={formik.values.countryId}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.countryId)}
            helperText={formik.errors.countryId}
          />
          <SelectItem
            type="text"
            label="City"
            menuItems={cityData?.data}
            variant="outlined"
            name="locationId"
            value={formik.values.locationId}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.locationId)}
            helperText={formik.errors.locationId}
          />
        </Wrapper>
        <Wrapper>
          <SelectItem
            menuItems={industry?.data}
            type="text"
            label="Industry"
            variant="outlined"
            name="industryId"
            value={formik.values.industryId}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.industryId)}
            helperText={formik.errors.industryId}
          />
        </Wrapper>
        <Wrapper>
          <SelectItem
            menuItems={companySize?.data}
            type="text"
            label="Company Size"
            variant="outlined"
            name="companySizeId"
            value={formik.values.companySizeId}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.companySizeId)}
            helperText={formik.errors.companySizeId}
          />
        </Wrapper>
        <Wrapper>
          <SelectItem
            menuItems={workPlace?.data}
            type="text"
            label="Workplace"
            variant="outlined"
            name="workPlaceIds"
            multiple={true}
            value={formik.values.workPlaceIds}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.workPlaceIds)}
            helperText={formik.errors.workPlaceIds}
          />
        </Wrapper>
      </StyledForm>
    </CompanyContainer>
  )
}

export default Company
