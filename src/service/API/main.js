import * as service from '../service'
import { useMutation } from 'react-query'
export const postApiToIAM = async (api, data) => {
  return await service.postDataIAM(api, data)
}

export const postApiToMain = async (url, data) => {
  return await service.postData(url, data)
}

export const getApiToMain = async (url) => {
  return await service.getData(url)
}

export const putApiToMain = async (url, data) => {
  return await service.updateData(url, data)
}

export const deleteApiToMain = async (url) => {
  return await service.deleteData(url)
}

export const useTestApi = () => {
    return useMutation(['test'], (data) => service.testApi({ ...data }))
  }
