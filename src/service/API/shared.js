import { useMutation, useQuery } from 'react-query'
import { getApiToMain, postApiToIAM, postApiToMain } from './main'

export const useRegisterUser = () => {
    return useMutation(['userRegister'], (data) => postApiToIAM('/auth/register', data))
  }
  
  export const useLogin = () => {
    return useMutation(['login'], (data) => postApiToIAM('/auth/login', data))
  }
  export const useForgotPassword = () => {
    return useMutation(['forgot-password'], (data) => postApiToIAM('/auth/reset-request', data))
  }
  
  export const useResetPassword = () => {
    return useMutation(['reset-password'], (data) => postApiToIAM('/auth/reset', data))
  }
  export const useVerifyEmail = () => {
    return useMutation(['verify-email'], (data) => postApiToIAM('/auth/activate', data))
  }

  export const useGetCountryPhoneCode = () => {
    return useQuery(['countryPhoneCode'], async () => await getApiToMain('/common/countryPhoneCode'))
  }
 
  export const useGetCountry = () => {
    return useQuery(['country'], async () => await getApiToMain('/common/country'))
  }
  export const useGetCity = (countryId) => {
    return useQuery(
      ['locationInfo', countryId],
      async () => {
        return await getApiToMain(`/common/locationInfo/${countryId}`)
      },
      {
        enabled: !!countryId,
      }
    )
  }
 
  
  export const useGetUniversity = ({ name }) => {
    return useQuery(['university'], async () => getApiToMain(`/common/university`))
  }
  //Bunun yerini teyit edelim ...
  export const useCreateRole = () => {
    return useMutation(['createRole'], (role) => postApiToMain(`/user/${role}/create`))
  }
  