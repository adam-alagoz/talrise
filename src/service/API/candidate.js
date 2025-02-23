import * as service from '../service'
import { useMutation, useQuery } from 'react-query'

import { postApiToMain, getApiToMain, putApiToMain, deleteApiToMain } from './main'

export const useGetCandidateDashboardInformation = () => {
  return useQuery(['dashboard'], () => getApiToMain(`/candidate/dashboard`))
}

export const usePositionUpdate = () => {
  return useMutation(['position'], (data) => putApiToMain('/candidate/positions', data))
}

export const useIndustryUpdate = () => {
  return useMutation(['industry'], (data) => putApiToMain('/candidate/industries', data))
}

export const useLanguageUpdate = () => {
  return useMutation(['language'], (data) => putApiToMain('/candidate/languages', data))
}

export const useSkillUpdate = () => {
  return useMutation(['skill'], (data) => putApiToMain('/candidate/skills', data))
}

export const useGetUserData = () => {
  return useQuery(['user'], () => getApiToMain(`/candidate/user`))
}

export const useReferCandidate = () => {
  return useMutation(['referCandidate'], (data) => postApiToMain('/candidate/referral', data))
}

export const useGetCandidateInfo = (userId) => {
  return useQuery(['candidateInfo', userId], async () => {
    const { data } = await getApiToMain('/candidate/user')
    return data
  })
}

export const usePersonalInfo = () => {
  return useMutation(['personal'], (data) => putApiToMain('/candidate/personnelInfo', data))
}

export const usePreferencesInfo = () => {
  return useMutation(['saving'], (data) => putApiToMain('/candidate/preferences', data))
}

export const useEducation = () => {
  return useMutation(['educations'], (data) => putApiToMain('/candidate/educations', data))
}

export const useDashboardCard = () => {
  return useQuery(['dashboard'], () => service.getData('/candidate/dashboard'))
}

export const useGetJobs = () => {
  return useQuery(['job'], async () => getApiToMain('/candidate/job'))
}

export const useCandidateCoverLetter = () => {
  return useMutation(['coverletter'], (data) => postApiToMain(`/candidate/file/cover-upload`, data))
}

export const useCandidateCv = () => {
  return useMutation(['cv'], (data) => postApiToMain(`/candidate/file/cv-upload`, data))
}

export const useGetOngoingProcessData = () => {
  return useMutation(['ongoing'], (id) => getApiToMain(`/candidate/job/ongoingProcess/${id}`))
}

export const useGetTools = (toolRefetchKey) => {
  return useQuery(['getTools', toolRefetchKey], async () => await getApiToMain('/candidate/listTools'))
}

export const useGetSkillList = (refetchKey) => {
  return useQuery(['position', refetchKey], async () => await getApiToMain('/candidate/listSkills'))
}

export const useExperience = () => {
  return useMutation(['experience'], (data) => putApiToMain('/candidate/experiences', data))
}

export const useNotificationsTable = () => {
  return useQuery(['notifications'], () => service.getData('/candidate/notification'))
}

export const useGetSavedJobs = () => {
  return useQuery(['savedJobs'], async () => getApiToMain('/candidate/job/savedJobs'))
}

export const useGetCandidateJobDetails = (jobId) => {
  return useQuery(['candidateJob'], async () => getApiToMain(`/candidate/job/jobDetail/${jobId}`))
}

export const useDeleteUploadedCv = () => {
  return useMutation(['deleteUploadedCv'], async () => deleteApiToMain('/candidate/file/cv-delete'))
}

export const useDeleteUploadedCoverLetter = () => {
  return useMutation(['deleteUploadedCoverLetter'], async () => deleteApiToMain('/candidate/file/cover-delete'))
}

export const useCreateClientReferral = () => {
  return useMutation(['createClientReferral'], async (data) => postApiToMain('/candidate/referral/client', data))
}

export const useSaveJob = () => {
  return useMutation(['saveJob'], (jobId) => postApiToMain(`/candidate/job/save/${jobId}`))
}

export const useUnsaveJob = () => {
  return useMutation(['unsaveJob'], (jobId) => deleteApiToMain(`/candidate/job/unsave/${jobId}`))
}

export const useApplyJob = () => {
  return useMutation(['applyJob'], (jobId) => postApiToMain(`/candidate/job/apply/${jobId}`))
}

export const useWithdrawJob = () => {
  return useMutation(['withdrawJob'], (jobId) => putApiToMain(`/candidate/job/withdraw/${jobId}`))
}
export const useReferCreateClient = () => {
  return useMutation(['createCandidateReferral'], async (data) => postApiToMain('/candidate/referral', data))
}
