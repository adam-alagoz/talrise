import { useCallback } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import {
  addCandidateId,
  addClientId,
  addJobId,
  addUserInfo,
  addCandidateUserInfo,
  addAdminInfo,
  addClientInfo,
  reset,
  resetInfo,
} from '../reducers/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()

  const { candidateId, clientId, jobId, userInfo, candidateUserInfo, adminInfo, clientInfo } = useSelector(({ user }) => {
    return {
      candidateId: user?.candidateId,
      clientId: user?.clientId,
      jobId: user?.jobId,
      userInfo: user?.userInfo,
      candidateUserInfo: user?.candidateUserInfo,
      adminInfo: user?.adminInfo,
      clientInfo: user?.clientInfo,
    }
  }, shallowEqual)

  const boundAddCandidateId = useCallback((...args) => dispatch(addCandidateId(...args)), [dispatch])
  const boundClientId = useCallback((...args) => dispatch(addClientId(...args)), [dispatch])
  const boundJobId = useCallback((...args) => dispatch(addJobId(...args)), [dispatch])
  const boundAddUserInfo = useCallback((...args) => dispatch(addUserInfo(...args)), [dispatch])
  const boundAddCandidateUserInfo = useCallback((...args) => dispatch(addCandidateUserInfo(...args)), [dispatch])
  const boundAddAdminInfo = useCallback((...args) => dispatch(addAdminInfo(...args)), [dispatch])
  const boundResetInfo = useCallback((...args) => dispatch(resetInfo(...args)), [dispatch])
  const boundReset = useCallback((...args) => dispatch(reset(...args)), [dispatch])
  const boundAddClientInfo = useCallback((...args) => dispatch(addClientInfo(...args)), [dispatch])
  return {
    candidateId,
    clientId,
    jobId,
    userInfo,
    candidateUserInfo,
    adminInfo,
    clientInfo,
    addCandidateId: boundAddCandidateId,
    addClientId: boundClientId,
    addJobId: boundJobId,
    addUserInfo: boundAddUserInfo,
    addCandidateUserInfo: boundAddCandidateUserInfo,
    addAdminInfo: boundAddAdminInfo,
    resetInfo: boundResetInfo,
    resetRedux: boundReset,
    addClientInfo: boundAddClientInfo,
  }
}
