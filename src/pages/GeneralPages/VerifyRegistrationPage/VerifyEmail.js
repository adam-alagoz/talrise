import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Completed from '../../../components/Completed'
import Layout from '../../../components/GeneralComponents/layout'
import Logo from '../../../assets/png/talrise_logo.png'
import { useState } from 'react'
import { useVerifyEmail } from '../../../service/API/shared'
import Loading from '../../LoadingPage'
const textSuccess = '<p>Your e-mail address has been verified.<p>'
const textFailure = '<p>Your e-mail address has “NOT” been verified.<p><p>Please check your e-mail adress<p>'

function VerifyEmail() {
  const { search } = useLocation()
  const parameters = new URLSearchParams(search)
  const token = parameters.get('token')
  const [isSuccess, setIsSuccess] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const verifyEmailMutation = useVerifyEmail()

  useEffect(() => {
    const data = { token: token }
    verifyEmailMutation.mutate(data, {
      onSuccess: () => {
        setIsLoading(false)
        setIsSuccess(true)
      },
      onError: (error) => {
        setIsLoading(false)
        setIsSuccess(false)
        console.error('🚀 ~ file: VerifyEmail.js:28 ~ useEffect ~ error', error)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !isLoading ? (
    <Layout
      componentRight={
        <Completed
          img={Logo}
          text={isSuccess ? textSuccess : textFailure}
          containedLabel={isSuccess ? 'LOGIN' : ''}
          containedNav={'/'}
        />
      }
    />
  ) : (
    <Loading loadingText="Verifying your email" />
  )
}

export default VerifyEmail
