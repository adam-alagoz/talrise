import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  candidateId: null,
  clientId: null,
  partnerId: null,
  jobId: null,
  userInfo: {
    id: null,
    email: null,
    firstName: null,
    gdpr: true,
    lastName: null,
    linkedIn: null,
    roles: [],
    token: null,
    activeRole: null,
  },
  candidateUserInfo: {
    personnelInfo: {
      talriseUserId: null,
      candidateId: null,
      firstName: null,
      lastName: null,
      linkedIn: null,
      email: null,
      countryId: null,
      cityId: null,
      countryPhoneCode: null,
      mobile: null,
    },
    preferences: {
      locations: [
        {
          countryId: '',
          cityId: '',
          workPlaceIds: [],
          citySelect: [],
        },
      ],
      salaryPreferenceId: '',
      minExpectedAmount: '',
      currencyId: '',
      visaStatusId: '',
      contractTypeId: '',
    },
    educations: { educations: [], certificates: [] },
    experiences: [],
    isNewGraduate: false,
    isStudent: false,
    skills: [],
    positions: [],
    industries: [],
    languages: [],
    candidateStatus: {
      personnelInfo: false,
      uploadCV: false,
      position: false,
      skillSet: false,
      industry: false,
      language: false,
      experience: false,
      education: false,
      preferences: false,
      gdpr: false,
      percentage: null,
    },
    skillRefetchKey: 'skill-refetchkey',
    toolRefetchKey: 'tool-refetchkey',
  },
  adminInfo: {
    basicInfo: {
      positionId: '',
      employmentTypeId: '',
      jobTitle: '',
      countryId: '',
      cityId: '',
      expectedClosureDate: '',
      expectedStartDate: '',
      contractTypeId: '',
      salaryAmountId: '',
      currencyId: '',
      workPlaceId: '',
      languageIds: [],
    },
    companyDetails: null,

    detailPayload: {
      requiredTechSkills: { searchText: '', addedItemsFormik: [], seeMore: false, selectValues: {} },
      optionalTechSkills: { searchText: '', addedItemsFormik: [], seeMore: false, selectValues: {} },
      softSkills: { searchText: '', addedItemsFormik: [], seeMore: false, selectValues: {} },
    },

    interviewProcess: {
      other: '',
      processIds: [],
    },
    benefits: {
      other: '',
      benefitIds: [],
    },
    post: null,
    roleResponsibility: '',
  },
  clientInfo: {
    contactInfos: [
      {
        firstName: '',
        lastName: '',
        clientRole: '',
        linkedin: '',
        email: '',
        countryPhoneCode: '',
        mobileNumber: '',
      },
    ],
    positions: [],
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCandidateId: (state, { payload }) => {
      state.candidateId = payload
    },
    addClientId: (state, { payload }) => {
      state.clientId = payload
    },
    addJobId: (state, { payload }) => {
      state.jobId = payload
    },
    addUserInfo: (state, { payload }) => {
      state.userInfo = { ...payload }
    },
    addCandidateUserInfo: (state, { payload }) => {
      state.candidateUserInfo = { ...payload }
    },
    addAdminInfo: (state, { payload }) => {
      state.adminInfo = { ...payload }
    },
    addClientInfo: (state, { payload }) => {
      state.clientInfo = { ...payload }
    },
    resetInfo: (state, { payload }) => {
      state[payload]= initialState[payload] 
    },
    reset: () => {
      localStorage.removeItem('persist:root')
      return initialState
    },
  },
})

export const {
  addCandidateId,
  addClientId,
  addJobId,
  addUserInfo,
  addCandidateUserInfo,
  addAdminInfo,
  addClientInfo,
  resetInfo,
  reset,
} = userSlice.actions

export default userSlice.reducer
