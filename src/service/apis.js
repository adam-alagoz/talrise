import * as service from './service'
import { useMutation, useQuery } from 'react-query'

const postApiToIAM = async (api, data) => {
  return await service.postDataIAM(api, data)
}

const postApiToMain = async (url, data) => {
  return await service.postData(url, data)
}

const getApiToMain = async (url) => {
  return await service.getData(url)
}

const putApiToMain = async (url, data) => {
  return await service.updateData(url, data)
}

const deleteApiToMain = async (url) => {
  return await service.deleteData(url)
}

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

export const useGetLookUpAllDatas = () => {
  return useMutation(['all'], async () => await getApiToMain(`/lookUp`))
}

export const useGetLookUpDatas = () => {
  return useMutation(['suggested'], (type) => getApiToMain(`/lookUp/${type}`))
}
export const useGetPositionDatas = () => {
  return useQuery(['position'], async () => await getApiToMain(`/lookUp/POSITION`))
}
export const useGetToolDatas = () => {
  return useQuery(['tool'], async () => await getApiToMain(`/lookUp/TOOL`))
}
export const useGetLanguageDatas = () => {
  return useQuery(['language'], async () => await getApiToMain(`/lookUp/LANGUAGE`))
}
export const useGetLanguageLevelDatas = () => {
  return useQuery(['language-level'], async () => await getApiToMain(`/lookUp/LANGUAGE_LEVEL`))
}

export const useGetExperienceDatas = () => {
  return useQuery(['experience'], async () => await getApiToMain(`/lookUp/EXPERIENCE_YEARS`))
}
export const useGetUserDatas = () => {
  return useQuery(['user'], () => getApiToMain(`/candidate/user`))
}

export const useTestApi = () => {
  return useMutation(['test'], (data) => service.testApi({ ...data }))
}

export const useGetCountryCode = () => {
  return useQuery(['countryCode'], async () => await getApiToMain('/common/countryPhoneCode'))
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

export const useGetAdminInfo = (candidateId) => {
  return useQuery(['adminInfo', candidateId], async () => {
    const { data } = await getApiToMain(`/admin/candidate/${candidateId}`)
    return data
  })
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

export const useGetCountryPhoneCode = () => {
  return useQuery(['countryPhoneCode'], async () => await getApiToMain('/common/countryPhoneCode'))
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

export const useGetDegree = () => {
  return useQuery(['degree'], async () => getApiToMain('/lookUp/DEGREE'))
}

export const useGetDepartment = () => {
  return useQuery(['department'], async () => getApiToMain('/lookUp/DEPARTMENT'))
}

export const useGetCurrency = () => {
  return useQuery(['currency'], async () => getApiToMain('/lookUp/CURRENCY'))
}

export const useGetVisaStatus = () => {
  return useQuery(['visaStatus'], async () => getApiToMain('/lookUp/VISA_STATUS'))
}

export const useGetSalaryPreference = () => {
  return useQuery(['salaryPreference'], async () => getApiToMain('/lookUp/SALARY_PREFERENCE'))
}
export const useGetUniversity = ({ name }) => {
  return useQuery(['university'], async () => getApiToMain(`/common/university`))
}

export const useGetCertificate = () => {
  return useQuery(['certificate'], async () => getApiToMain('/lookUp/CERTIFICATE'), {
    refetchOnWindowFocus: false,
  })
}

export const useCreateRole = () => {
  return useMutation(['createRole'], (role) => postApiToMain(`/user/${role}/create`))
}

export const useDashboardCard = () => {
  return useQuery(['dashboard'], () => service.getData('/candidate/dashboard'))
}

export const useGetJobs = () => {
  return useQuery(['job'], async () => getApiToMain('/candidate/job'))
}
export const useGetAdminJobs = () => {
  return useQuery(['adminJob'], async () => getApiToMain('/job'))
}

export const useUpdateJobStatus = () => {
  return useMutation(['jobStatus'], (data) => {
    putApiToMain(`/job/changeStatus/${data.id}`, {"status":data.status})})
}

export const useCandidateCoverLetter = () => {
  return useMutation(['coverletter'], (data) => postApiToMain(`/candidate/file/cover-upload`, data))
}

export const useCandidateCv = () => {
  return useMutation(['cv'], (data) => postApiToMain(`/candidate/file/cv-upload`, data))
}
export const useCreateLookUp = () => {
  return useMutation(['createLookUp'], (data) => postApiToMain(`/lookUp`, data))
}

export const useGetOngoingProcessDatas = () => {
  return useMutation(['ongoing'], (id) => getApiToMain(`/candidate/job/ongoingProcess/${id}`))
}

export const useGetContractType = () => {
  return useQuery(['getContractType'], async () => await getApiToMain('/lookUp/CONTRACT_TYPE'))
}

export const useGetWorkPlace = () => {
  return useQuery(['getWorkType'], async () => await getApiToMain('/lookUp/WORK_PLACE'))
}

export const useGetNoticePeriod = () => {
  return useQuery(['getNoticePeriod'], async () => await getApiToMain('/lookUp/NOTICE_PERIOD'))
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

export const useGetIndustry = () => {
  return useQuery(['industry'], async () => getApiToMain('/lookUp/INDUSTRY'))
}

export const useGetCompanySize = () => {
  return useQuery(['companySize'], async () => getApiToMain('/lookUp/COMPANY_SIZE'))
}

export const useGetPositions = () => {
  return useQuery(['positions'], async () => getApiToMain('/lookUp/POSITION'))
}

export const useGetExperienceYears = () => {
  return useQuery(['salaryPreference'], async () => getApiToMain('/lookUp/EXPERIENCE_YEARS'))
}

/**
 * Client api cals
 */

export const useCompanyDetails = () => {
  return useMutation(['companyDetails'], (data) => putApiToMain('/client/companyDetails', data))
}
export const useCompanyProfile = () => {
  return useMutation(['companyProfile'], (data) => putApiToMain('/client/companyProfile', data))
}

export const useContactInfo = () => {
  return useMutation(['contactInfo'], (data) => putApiToMain('/client/contactInfo', data))
}

export const useGetCandidateProcess = (positionId) => {
  return useQuery(['clientCandProcess'], async () => getApiToMain(`/client/candidate/process/${positionId}`))
}

export const useGetClientData = () => {
  return useQuery(['clientData'], async () => getApiToMain('/client/user'))
}

export const useGetSavedJobs = () => {
  return useQuery(['savedJobs'], async () => getApiToMain('/candidate/job/savedJobs'))
}

export const useGetJobDetails = (jobId) => {
  return useQuery(['jobDetails'], async () => getApiToMain(`/job/${jobId}`))
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

export const useGetJobApplication = () => {
  return useQuery(['jobApplication'], async () => getApiToMain('/admin/jobApplication/appliedJobs'))
}
export const useGetJobApplicationLookUp = () => {
  return useQuery(['jobApplicationLookUp'], async () => getApiToMain('/lookUp/INTERVIEW_PROCESS'))
}
export const useCreateClientReferral = () => {
  return useMutation(['createClientReferral'], async (data) => postApiToMain('/candidate/referral/client', data))
}
export const useGetJobStatus = () => {
  return useQuery(['INTERVIEW_PROCESS'], async () => await getApiToMain('/lookUp/INTERVIEW_PROCESS'))
}

export const useSaveJob = () => {
  return useMutation(['saveJob'], (jobId, data) => postApiToMain(`/candidate/job/save/${jobId}`, data))
}

export const useCreateJob = () => {
  return useMutation(['createJob'], (clientId, data) => postApiToMain(`/job/basics/admin/${clientId}`, data))
}

export const useUnsaveJob = () => {
  return useMutation(['unsaveJob'], (jobId, data) => deleteApiToMain(`/candidate/job/unsave/${jobId}`, data))
}

export const useApplyJob = () => {
  return useMutation(['applyJob'], (jobId) => postApiToMain(`/candidate/job/apply/${jobId}`))
}

export const useWithdrawJob = (jobId) => {
  return useMutation(['withdrawJob'], (data) => putApiToMain(`/candidate/job/withdraw/${jobId}`, data))
}

///* ADMIN API CALLS *///

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
export const useGetClientInfo = (clientId) => {
  return useQuery(['clientInfo'], async () => getApiToMain(`/admin/client/${clientId}`))
}

export const useGetRegisteredCandidates = () => {
  return useQuery(['registrations'], async () => getApiToMain('/admin/candidate/registrations'))
}
