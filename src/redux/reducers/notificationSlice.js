import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getData } from '../../service/service'

const initialState = {
  notifications: [],
}

export const getNotifications = createAsyncThunk('notifications/getNotifications', async () => {
  return getData("/candidate/notification").then((res) => res.data.data)
})


export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: {
    [getNotifications.fulfilled]: (state,{payload}) => {
      state.notifications = [...payload]
    },
  },
})

export default notificationsSlice.reducer
