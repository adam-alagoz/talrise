import axios from 'axios'
import { handleError } from '../utils/errors/error'

const getMainUrl = () => {
  return process.env.REACT_APP_URL
}

const getAIMUrl = () => {
  return process.env.REACT_APP_AIM_URL
}

export const getToken = () => localStorage.getItem('token')

export const getData = async (url) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${getMainUrl()}${url}`,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    })
    return response.data
  } catch (error) {
    handleError(error?.response?.status, error?.message)
  }
}

export const getDataFile = async (url) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${getMainUrl()}${url}`,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
      responseType: 'blob',
    })
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const postFileData = async (url, data) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${getMainUrl()}${url}`,
      data,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    })
    return response.data
  } catch (err) {
    throw err
  }
}
export const postData = async (url, data) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${getMainUrl()}${url}`,
      data,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    })
    return response.data
  } catch (err) {
    throw err
  }
}

export const updateData = async (url, data) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${getMainUrl()}${url}`,
      data,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    })

    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const postDataIAM = async (url, data) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${getAIMUrl()}${url}`,
      data,
    })

    return response.data
  } catch (err) {
    throw err
  }
}

export const deleteData = async (url) => {
  try {
    const response = await axios({
      method: 'delete',
      url: `${getMainUrl()}${url}`,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    })
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const testApi = async ({ method, url, data, authorization }) => {
  let arg = { method, url }
  data && Object.keys(JSON.parse(data)).length !== 0 && (arg = { ...arg, data: JSON.parse(data) })
  authorization && authorization !== 'Bearer ...' && (arg = { ...arg, headers: { authorization } })

  try {
    const response = await axios({
      ...arg,
    })

    return response.data
  } catch (err) {
    throw err
  }
}
