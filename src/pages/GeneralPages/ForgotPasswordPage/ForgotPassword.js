import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { StyledContainer, StyledForm, AtomicButton } from './index.styles'
import { Text, TextField } from '../../../atoms'
import { useForgotPassword } from '../../../service/API/shared'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorIcon from '../../../assets/svg/ErrorIcon.svg'


const ForgotPassword = () => {
  const navigate = useNavigate()
  const forgotPasswordMutation = useForgotPassword()
  const initialValues = {
    email: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Please enter your e-mail address.'),
  })

  const onSubmit = (values) => {
    forgotPasswordMutation.mutate(values, {
      onSuccess: () => {
        toast.success('E-mail has been sent successfully.')
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
        <b> FORGOT YOUR PASSWORD? </b>
      </Text>
      <Text type="Headline2">
        <b> Don't worry! Just write your email address! </b>
      </Text>
      <StyledForm className="form-input" onSubmit={formik.handleSubmit}>
        <TextField
          type="email"
          className="form-control"
          id="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color="secondary"
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <AtomicButton
          className="reset-password"
          variant="contained"
          type="submit"
          label="RESET PASSWORD"
        />
      </StyledForm>
    </StyledContainer>
  )
}
export default ForgotPassword
