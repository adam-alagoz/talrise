import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { StyledContainer, StyledForm, AtomicButton, StyledTextField } from './index.styles'
import { Text } from '../../../atoms'
import { useResetPassword } from '../../../service/API/shared'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'
import ErrorIcon from '../../../assets/svg/ErrorIcon.svg'


const ResetPassword = () => {
  const { search } = useLocation()
  const parameters = new URLSearchParams(search)
  const token = parameters.get('token')
  const navigate = useNavigate()
  const resetPasswordMutation = useResetPassword()
  const initialValues = {
    password: '',
  }

  const regex =
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}/[\]|\\:;"'<>,.?/_₹]).{8,}$/
  const validationSchema = yup.object({
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long.')
      .matches(
        regex,
        'Password must include at least a lowercase letter, an uppercase letter,\n a number and a special character.'
      )
      .required('Please enter your password.'),
    confirmPassword: yup
      .string()
      .required('Please confirm your password.')
      .min(8, 'Password must be at least 8 characters long.')
      .oneOf([yup.ref('password')], 'Passwords do not match.'),
  })

  const onSubmit = (values) => {
    const data = { newPassword: values.password, token: token }
    resetPasswordMutation.mutate(data, {
      onSuccess: () => {
        toast.success('Password has been reset successfully.')
        navigate('/')
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        toast.error(errorMessages, {icon:<img src={ErrorIcon} alt=''/>})
      },
    })
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return (
    <StyledContainer>
      <Text type="Headline1" className="text-headline">
        <b> CREATE NEW PASSWORD! </b>
      </Text>
      <StyledForm className="form-input" onSubmit={formik.handleSubmit}>
        <StyledTextField
          id="password"
          className="password-field"
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
        <StyledTextField
          id="confirmPassword"
          className="password-field"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          color="secondary"
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <AtomicButton
          className="reset-password"
          variant="contained"
          type="submit"
          label="CONTINUE"
        />
      </StyledForm>
    </StyledContainer>
  )
}
export default ResetPassword
