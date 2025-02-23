import { TextField } from '../../../atoms'
import { StyledContainer } from './index.styles'
import Select from '../../../components/SelectItem'
import { useGetCountryPhoneCode } from '../../../service/API/shared'

const ClientDetails = ({ formik }) => {
  const { data: phoneCodeData } = useGetCountryPhoneCode()
  const phoneCodes = phoneCodeData?.data?.map((code) => ({ ...code, name: code, id: code })) ?? []

  return (
    <>
      <StyledContainer className="nameContainer">
        <TextField
          name="firstName"
          label="Contact First Name*"
          color="secondary"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          name="lastName"
          label="Contact Last Name*"
          color="secondary"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </StyledContainer>
      <TextField
        name="position"
        label="Position*"
        color="secondary"
        value={formik.values.position}
        onChange={formik.handleChange}
        error={formik.touched.position && Boolean(formik.errors.position)}
        helperText={formik.touched.position && formik.errors.position}
      />
      <TextField
        name="linkedIn"
        label="LinkedIn*"
        color="secondary"
        value={formik.values.linkedIn}
        onChange={formik.handleChange}
        error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
        helperText={formik.touched.linkedIn && formik.errors.linkedIn}
      />
      <TextField
        name="email"
        type="email"
        label="E-mail*"
        color="secondary"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <StyledContainer className="phoneContainer">
        <Select
          name="countryPhoneCode"
          label="Country Code*"
          menuItems={phoneCodes ?? []}
          value={formik.values.countryPhoneCode}
          handleChange={formik.handleChange}
          error={formik.touched.countryPhoneCode && Boolean(formik.errors.countryPhoneCode)}
          helperText={formik.touched.countryPhoneCode && formik.errors.countryPhoneCode}
        />
        <TextField
          name="mobile"
          label="Mobile*"
          color="secondary"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
      </StyledContainer>
    </>
  )
}

export default ClientDetails
