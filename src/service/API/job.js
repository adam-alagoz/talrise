import { useMutation, useQuery } from 'react-query'
import { getApiToMain, postApiToMain, putApiToMain } from './main'

export const useGetJobDetails = (jobId) => {
  return useQuery(['jobDetails'], async () => getApiToMain(`/job/${jobId}`))
}

export const useDetailsMutation = () => {
  return useMutation(['jobPutDetails'], ({ data, jobId }) => putApiToMain(`/job/details/${jobId}`, data))
}

export const useAdminInterviewProcess = () => {
  return useMutation(['jobInterviewProcess'], ({ data, jobId }) => putApiToMain(`/job/interviewProcess/${jobId}`, data))
}

export const useRoleResponsibilityMutation = () => {
  return useMutation(['roleResponsibility'], ({ data, jobId }) => putApiToMain(`/job/roleResponsibility/${jobId}`, data))
}

export const useBenefitJob = () => {
  return useMutation(['benefitJob'], ({ data, jobId }) => putApiToMain(`/job/benefits/${jobId}`, data))
}

export const useBasicInfo = () => {
  return useMutation(['basicInfoMutation'], ({ data, clientId }) => postApiToMain(`/job/basics/admin/${clientId}`, data))
}
export const useClientBasic = () => {
  return useMutation(['clientBasic'], ({ data }) => postApiToMain('/job/basics', data))
}
export const useClientBasicEdit = () => {
  return useMutation(['clientBasicEdit'], ({ data, jobId }) => putApiToMain(`/job/basics/${jobId}`, data))
}