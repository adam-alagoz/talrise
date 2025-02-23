import { useMutation, useQuery } from 'react-query'
import { getApiToMain, postApiToMain, putApiToMain, deleteApiToMain } from './main'

export const useGetLookUpAllData = () => {
  return useQuery(['all'], async () => await getApiToMain(`/lookUp`))
}

export const useGetLookUpData = (type) => {
  return useQuery([type], () => getApiToMain(`/lookUp/${type}`))
}

export const useCreateLookUp = () => {
  return useMutation(['createLookUp'], (data) => postApiToMain(`/lookUp`, data))
}

export const useEditLookUp = () => {
  return useMutation(['edit'], async (data) => await putApiToMain(`/lookUp/${data?.id}`, data))
}

export const useDeleteLookUp = () => {
  return useMutation(['delete'], async (id) => await deleteApiToMain(`/lookUp/${id}`))
}
