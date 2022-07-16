import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import sendReducer from '../features/sends/sendsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sends: sendReducer,
  },
})
