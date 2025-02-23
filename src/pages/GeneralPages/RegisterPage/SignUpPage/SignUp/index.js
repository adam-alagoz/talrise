import {
  StyledContainer,
  AtomicButton,
  StyledForm,
  StyledTextField,
  StyledText,
  StyledCheckBoxContainer,
  Wrapper,
} from './index.styles'
import { Checkbox, FormGroup, FormControlLabel, FormHelperText } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from 'yup'
import { useRegisterUser } from '../../../../../service/API/shared'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useUser } from '../../../../../redux/hooks'
import ErrorIcon from '../../../../../assets/svg/ErrorIcon.svg'

const SignUp = () => {
  const navigate = useNavigate()

  const { addCandidateUserInfo, candidateUserInfo, addUserInfo, resetRedux } = useUser()
  const registerMutation = useRegisterUser()
  const initialValues = {
    firstName: '',
    lastName: '',
    linkedIn: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  }
  const regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}/[\]|\\:;"'<>,.?/_₹]).{8,}$/

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .matches('^[a-zA-Z]+(?: [a-zA-Z]+)*$', 'Not a valid name! (Only letters)')
      .min(2, 'First name should be 2 characters minimum.')
      .required('Please enter your first name.'),
    lastName: yup
      .string()
      .matches('^[a-zA-Z]+(?: [a-zA-Z]+)*$', 'Not a valid lastname! (Only letters)')
      .min(2, 'Last name should be 2 characters minimum.')
      .required('Please enter your last name.'),
    linkedIn: yup
      .string()
      .matches(
        '^https://(www.)?linkedin.com/in/[a-zA-Z0-9_-]+/?$',
        'LinkedIn URL must be a valid LinkedIn URL (https://linkedin.com/in/brucelee/)'
      )
      .required('Please enter your LinkedIn URL.'),
    email: yup
      .string()
      .min(6, 'Email should be 6 characters minimum.')
      .email('Email must be a valid email (example@mail.com)')
      .required('Please enter your e-mail address.'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long.')
      .matches(
        regex,
        'Password must include at least a lowercase letter, an uppercase letter\n a number and a special character.'
      )
      .required('Please enter your password.'),
    confirmPassword: yup
      .string()
      .required('Please confirm your password.')
      .min(8, 'Password must be at least 8 characters long.')
      .oneOf([yup.ref('password')], 'Passwords do not match.'),
    checkbox: yup.boolean().oneOf([true], 'Please confirm that you have read and agree to the Privacy Policy & GDPR.'),
  })
  const onSubmit = (values) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      linkedIn: values.linkedIn,
      gdpr: values.checkbox,
    }

    const personnelInfo = {
      firstName: values.firstName,
      lastName: values.lastName,
      linkedIn: values.linkedIn,
      countryId: '',
      cityId: '',
      email: values.email,
      countryPhoneCode: '',
      mobile: '',
    }
    resetRedux()
    registerMutation.mutate(payload, {
      onSuccess: ({ data }) => {
        addCandidateUserInfo({ ...candidateUserInfo, personnelInfo: personnelInfo })
        addUserInfo({ ...data })
        toast.success('Registered successfully!')
        navigate('/signup-successful')
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        toast.error(errorMessages, { icon: <img src={ErrorIcon} alt="" /> })
      },
    })
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const label = (
    <span>
      I have read and agree to the&nbsp;
      <Link to="/privacy" target="_blank">
        privacy policy and GDPR.
      </Link>
    </span>
  )

  return (
    <StyledContainer>
      <StyledText className="text-example" type="Headline1">
        Sign Up
      </StyledText>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Wrapper>
          <StyledTextField
            name="firstName"
            className="firstLastName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            color="secondary"
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <StyledTextField
            name="lastName"
            className="firstLastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            color="secondary"
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Wrapper>
        <StyledContainer>
          <StyledTextField
            name="linkedIn"
            label="LinkedIn"
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            color="secondary"
            error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
            helperText={formik.touched.linkedIn && formik.errors.linkedIn}
          />
        </StyledContainer>
        <StyledContainer>
          <StyledTextField
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            color="secondary"
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </StyledContainer>
        <StyledContainer>
          <StyledTextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            color="secondary"
            autoComplete="current-password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </StyledContainer>
        <StyledContainer>
          <StyledTextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            color="secondary"
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </StyledContainer>
        <StyledCheckBoxContainer>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="secondary" checked={formik.values.checkbox} />}
              label={label}
              name="checkbox"
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.touched.checkbox && Boolean(formik.errors.checkbox)}>
              {formik.touched.checkbox && formik.errors.checkbox}
            </FormHelperText>
          </FormGroup>
        </StyledCheckBoxContainer>
        <StyledContainer className="buttonDiv">
          <AtomicButton color="secondary" variant="contained" type="submit" label="CREATE MY ACCOUNT" />
        </StyledContainer>
      </StyledForm>
    </StyledContainer>
  )
}

export default SignUp
