import { useMutation, useQuery } from 'react-query'
import { getApiToMain, postApiToMain, putApiToMain } from './main'

export const useCompanyDetails = () => {
  return useMutation(['companyDetails'], (data) => putApiToMain('/client/companyDetails', data))
}
export const useCompanyProfile = () => {
  return useMutation(['companyProfile'], (data) => putApiToMain('/client/companyProfile', data))
}

export const useContactInfo = () => {
  return useMutation(['contactInfo'], (data) => putApiToMain('/client/contactInfo', data))
}

export const useOpenPositionsUpdate = () => {
  return useMutation(['openPositions'], (data) => putApiToMain('/client/openPositions', data))
}

export const useGetCandidateProcess = (positionId) => {
  return useQuery(['clientCandProcess'], async () => getApiToMain(`/client/candidate/process/${positionId}`))
}

export const useGetClientData = () => {
  return useQuery(['clientData'], async () => getApiToMain('/client/user'))
}
export const useInviteFriendMutation = () => {
  return useMutation(['inviteFriend'], (data) => postApiToMain(`/candidate/invite`, data))
}

export const useGetClientDashboard = () => {
  return useQuery(['clientDashboard'], async () => getApiToMain('/client/dashboard'))
}
