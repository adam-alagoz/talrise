import { PersonalContainer, Wrapper, StyledForm } from './index.styles'
import { Text, TextField } from '../../../atoms'
import SelectItem from '../../../components/SelectItem'
import { useGetCountryPhoneCode, useGetCountry, useGetCity } from '../../../service/API/shared'

const Personal = ({ formik }) => {
  const { data: countryData } = useGetCountry()
  const { data: phoneCodeData } = useGetCountryPhoneCode()
  const { data: cityData } = useGetCity(formik?.values?.countryId)

  const phoneCodes = phoneCodeData?.data ? phoneCodeData.data.map((code) => ({ name: code, id: code })) : []
  return (
    <PersonalContainer>
      <Text display="block" className="headline" type="Headline2">
        Personal Information
      </Text>
      <Text display="block" className="text-basic" type="Subtitle1">
        Please let us know some of your basic personal information.
      </Text>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Wrapper>
          <TextField
            type="text"
            label="First Name*"
            variant="outlined"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            type="text"
            label="Last Name*"
            variant="outlined"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            InputProps={{
              readOnly: true,
            }}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="LinkedIn*"
            variant="outlined"
            name="linkedIn"
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
            helperText={formik.touched.linkedIn && formik.errors.linkedIn}
            InputProps={{
              readOnly: true,
            }}
          />
        </Wrapper>
        <Wrapper>
          <SelectItem
            menuItems={countryData?.data}
            type="text"
            label="Country"
            variant="outlined"
            noneOption={true}
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
            noneOption={true}
            name="cityId"
            disabled={!formik.values.countryId}
            value={formik.values.countryId ? formik.values.cityId : ''}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.cityId)}
            helperText={formik.errors.cityId}
          />
        </Wrapper>
        <Wrapper>
          <TextField
            type="text"
            label="E-mail*"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Wrapper>
        <Wrapper className="phone">
          <SelectItem
            type="text"
            label="Country Code"
            defaultValue="44"
            variant="outlined"
            noneOption={true}
            name="countryPhoneCode"
            menuItems={phoneCodes}
            value={formik.values.countryPhoneCode}
            handleChange={formik.handleChange}
            error={Boolean(formik.errors.countryPhoneCode)}
            helperText={formik.errors.countryPhoneCode}
          />
          <TextField
            type="text"
            label="Mobile"
            variant="outlined"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.mobile)}
            helperText={formik.errors.mobile}
          />
        </Wrapper>
      </StyledForm>
    </PersonalContainer>
  )
}

export default Personal
