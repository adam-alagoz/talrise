import { ReferContainer, Wrapper, StyledForm, InfoContainer, FirstContainer, ButtonContainer, AtomicButton } from './index.styles'
import { Text, TextField } from '../../../../atoms'
import SelectItem from '../../../../components/SelectItem'
import { useGetCountryPhoneCode, useGetCountry, useGetCity } from '../../../../service/API/shared'
import { useReferInfoHook } from '../../../../utils/formikHooks/refersFormik'

const ReferCandidateInfo = () => {
  const { formik } = useReferInfoHook()
  const { data: countryData } = useGetCountry()
  const { data: phoneCodeData } = useGetCountryPhoneCode()
  const { data: cityData } = useGetCity(formik?.values?.countryId)
  const phoneCodes = phoneCodeData?.data ? phoneCodeData.data.map((code) => ({ name: code, id: code })) : []

  return (
    <FirstContainer>
      <Text display="block" className="firstHeadline" type="Headline1">
        Referrals
      </Text>
      <ReferContainer>
        <InfoContainer>
          <Text display="block" className="headline" type="Headline3">
            Refer Candidate
          </Text>
          <Text display="block" className="text-basic" type="Subtitle1">
            Let us know some of your refferal's basic personal information.
          </Text>
          <StyledForm onSubmit={formik.handleSubmit}>
            <Wrapper>
              <TextField
                type="text"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.firstName)}
                helperText={formik.errors.firstName}
              />
              <TextField
                type="text"
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.lastName)}
                helperText={formik.errors.lastName}
              />
            </Wrapper>
            <Wrapper>
              <TextField
                type="text"
                label="Position"
                variant="outlined"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.position)}
                helperText={formik.errors.position}
              />
            </Wrapper>
            <Wrapper>
              <TextField
                type="text"
                label="Linkedin"
                variant="outlined"
                name="linkedIn"
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.linkedIn)}
                helperText={formik.errors.linkedIn}
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
                name="cityId"
                value={formik.values.cityId}
                handleChange={formik.handleChange}
                error={Boolean(formik.errors.cityId)}
                helperText={formik.errors.cityId}
              />
            </Wrapper>
            <Wrapper>
              <TextField
                type="text"
                label="E-mail"
                variant="outlined"
                name="email"
                value={formik.values.email}
                handleChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
            </Wrapper>
            <Wrapper className="phone">
              <SelectItem
                type="text"
                label="Country Code"
                defaultValue="44"
                variant="outlined"
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
          <ButtonContainer>
            <AtomicButton className="addEdu" variant="outlined" type="submit" handleClick={(e) => e} label="Back" />
            <AtomicButton className="addEdu" variant="contained" type="submit" handleClick={(e) => e} label="Next" />
          </ButtonContainer>
        </InfoContainer>
      </ReferContainer>
    </FirstContainer>
  )
}

export default ReferCandidateInfo
