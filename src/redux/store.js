import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import notificationReducer from './reducers/notificationSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedUserReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.experiences', 'user.candidateUserInfo.experiences'],
        ignoredPaths: ['payload.experiences', 'user.candidateUserInfo.experiences'],
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
