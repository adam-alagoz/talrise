import { useFormik } from 'formik'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useUser } from '../../../redux/hooks/userHook'
import { useInviteFriendMutation } from '../../../service/API/client'

export const useInviteFriendHook = () => {
  const { candidateUserInfo } = useUser()
  const inviteFriendMutation = useInviteFriendMutation ()

  const isLoaded = (infoData) => {
    let isLoaded = false
    Object.values(infoData).forEach((value) => {
      if (value !== null) {
        isLoaded = true
      }
    })
    return isLoaded
  }

  const initialValues = {
    inviteEmail: '',
    message: 'Please accept my invitation!',
  }
  const validationSchema = yup.object({
    inviteEmail: yup
      .string()
      .email('Please enter a valid e-mail address.')
      .required("Please enter your friend's e-mail address."),
    message: yup.string().trim().min(2),
  })
  const handleSubmit = (values) => {  
    
    inviteFriendMutation.mutate({
      inviteEmail:values.inviteEmail.toLowerCase(),
      message:values.message} ,{

     

      onSuccess: () => {
        toast.success('Your invitation has been submitted successfully.')
        values.inviteEmail=''
        values.message=''
      },
      onError: (error) => {
        toast.error(
          "Sorry, the person you wanted to refer has already been in our system."
        )
      },
    })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  })

  useEffect(() => {
    if (isLoaded(candidateUserInfo?.personnelInfo)) {
      formik.setValues({...candidateUserInfo?.personnelInfo, ...initialValues})
    }
    // eslint-disable-next-line
  }, [candidateUserInfo?.personnelInfo?.inviteEmail])

  return { formik }
}
