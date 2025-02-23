import { useMutation, useQuery } from 'react-query'
import { getApiToMain, postApiToMain, putApiToMain } from './main'

export const useGetAdminInfo = (candidateId) => {
  return useQuery(['adminInfo', candidateId], async () => {
    const { data } = await getApiToMain(`/admin/candidate/${candidateId}`)
    return data
  })
}

export const useGetJobApplication = () => {
  return useQuery(['jobApplication'], async () => getApiToMain('/admin/jobApplication/appliedJobs'))
}

export const useAdminCompanyDetails = () => {
  return useMutation(['adminCompanyDetails'], ({ data, clientId }) =>
    putApiToMain(`/admin/client/companyDetails/${clientId}`, data)
  )
}
export const useAdminCompanyProfile = () => {
  return useMutation(['adminCompanyProfile'], ({ data, clientId }) =>
    putApiToMain(`/admin/client/companyProfile/${clientId}`, data)
  )
}
export const useAdminContactInfo = () => {
  return useMutation(['adminContactInfo'], (data) => postApiToMain(`/admin/client/contactInfo`, data))
}
export const useAdminContactInfoUpdate = () => {
  return useMutation(['adminContactInfoUpdate'], ({ data, clientId }) =>
    putApiToMain(`/admin/client/contactInfo/${clientId}`, data)
  )
}
export const useGetClientInfo = (clientId) => {
  return useQuery(['clientInfo'], async () => getApiToMain(`/admin/client/${clientId}`))
}

export const useGetRegisteredCandidates = () => {
  return useQuery(['registrations'], async () => getApiToMain('/admin/candidate/registrations'))
}
export const useCandidatePersonalInfo = (candidateId) => {
  return useQuery(['candidatePersonalInfo'], async () => getApiToMain(`/admin/candidate/${candidateId}`))
}
export const useCandidateListTools = (candidateId) => {
  return useQuery(['candidateListTools'], async () => getApiToMain(`/admin/candidate/listTools/${candidateId}`))
}
