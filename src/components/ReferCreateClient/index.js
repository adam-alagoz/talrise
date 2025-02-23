import { ReferContainer, Wrapper, StyledForm, InfoContainer, FirstContainer, ButtonContainer, AtomicButton } from './index.styles'
import { Text, TextField } from '../../atoms'
import SelectItem from '../SelectItem'
import { useGetCountry, useGetCity } from '../../service/API/shared'
import { useReferCreateClientHook } from '../../utils/formikHooks/referCreateClientFormik'

const ReferCreateClient = () => {
  const { formik } = useReferCreateClientHook()
  const { data: countryData } = useGetCountry()
  const { data: cityData } = useGetCity(formik?.values?.countryId)

  return (
    <FirstContainer>
      <Text display="block" className="firstHeadline" type="Headline1">
        Referrals
      </Text>
      <ReferContainer>
        <Text display="block" className="headline" type="Headline3">
          Refer Client
        </Text>
        <StyledForm onSubmit={formik.handleSubmit}>
          <InfoContainer>
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
                label="Company LinkedIn"
                variant="outlined"
                name="companyLinkedIn"
                value={formik.values.companyLinkedIn}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.companyLinkedIn)}
                helperText={formik.errors.companyLinkedIn}
              />
            </Wrapper>
            <Wrapper>
              <TextField
                type="text"
                label="Company Website"
                variant="outlined"
                name="companyWebsite"
                value={formik.values.companyWebsite}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.companyWebsite)}
                helperText={formik.errors.companyWebsite}
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
          </InfoContainer>
          <ButtonContainer>
            <AtomicButton className="addEdu" variant="contained" type="submit" handleClick={(e) => e} label="Back" />
            <AtomicButton className="addEdu" variant="contained" type="submit" handleClick={(e) => e} label="Refer" />
          </ButtonContainer>
        </StyledForm>
      </ReferContainer>
    </FirstContainer>
  )
}

export default ReferCreateClient
