import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { StyledContainer, StyledForm, AtomicButton } from './index.styles'
import { Text, TextField } from '../../../atoms'
import Button from '@mui/material/Button'
import { FormGroup, FormHelperText } from '@mui/material'
import { useLogin } from '../../../service/API/shared'
import { get } from 'lodash'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment'
import { useUser } from '../../../redux/hooks'
import ErrorIcon from '../../../assets/svg/ErrorIcon.svg'

const LoginIndex = () => {
  const navigate = useNavigate()
  const loginMutation = useLogin()
  const { addUserInfo,resetRedux} = useUser()
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid e-mail address.')
      .required('Please enter your e-mail address.'),
    password: Yup.string()
      .required('Please enter your password.')
      .min(8, 'Password must be at least 8 characters long.'),
  })

  const onSubmit = (values) => {
    resetRedux() 
    loginMutation.mutate({...values, email:values.email.toLowerCase()}, {
      onSuccess: ({ data }) => {
        const token = get(data, 'token', '')
        const tokenSetTime = moment()
        localStorage.setItem('tokenSetTime', tokenSetTime)
        localStorage.setItem('token', token)
        localStorage.setItem('activeRole', data?.roles?.some((x)=> x === "CANDIDATE") ?  "CANDIDATE"  : data?.roles?.some((x)=> x === "SUPER_ADMIN") ? "SUPER_ADMIN" : data?.roles?.some((x)=> x === "CLIENT") ? "CLIENT" : "")
        addUserInfo({ ...data })
        toast.success('Logged in successfully.')
        const roleOnlyUser = data?.roles?.length <= 1
        if (token && roleOnlyUser) navigate('/chooseRole')
        if (token && !roleOnlyUser) navigate('/*')
      },
      onError: (error) => {
        const errors = error.response.data.errors
        const errorMessages = errors.map((error) => error.message).join(' & ')
        errors[0].code === 1012 ? navigate(`/login-verify-email-failed`) : toast.error(errorMessages, {icon:<img src={ErrorIcon} alt=''/>})
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
      <Text className="text-login">Login</Text>
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
        <TextField
          type="password"
          id="password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          color="secondary"
          helperText={formik.touched.password && formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          autoComplete="true"
        />

        <FormGroup className="form-group">
          <FormHelperText error>{formik.errors.checkbox}</FormHelperText>
          <AtomicButton variant="text" type="button" handleClick={() => navigate('/forgot-password')} label="Forgot password?" />

          <AtomicButton className="login" variant="contained" type="submit" label="LOGIN" />
        </FormGroup>
      </StyledForm>
      <StyledForm>
        <Text type="Body2" className="login-font">
          Need An Account? <Button onClick={() => navigate('/register')}>SIGN UP</Button>
        </Text>
      </StyledForm>
    </StyledContainer>
  )
}
export default LoginIndex
