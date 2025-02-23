import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getData } from '../../service/service'

const initialState = {
    
    datas : null
}

export const getUploadCv = createAsyncThunk('notifications/getNotifications', async () => {
  return getData("/candidate/file/cv-download").then((res) => res.data.data)
})


export const notificationsSlice = createSlice({
  name: 'uploadCv',
  initialState,
  reducers: {},
  extraReducers: {
    [getUploadCv.fulfilled]: (state,{payload}) => {
      state.datas = [...payload]
    },
  },
})

export default notificationsSlice.reducer
