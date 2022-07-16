import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sendService from './sendsService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createSend = createAsyncThunk(
  'sends/create',
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await sendService.createGoal(goalData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getSends= createAsyncThunk(
  'sends/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await sendService.getSends(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user send
export const deleteSend = createAsyncThunk(
  'sends/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await sendService.deleteSends(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const sendSlice = createSlice({
  name: 'send',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSend.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSend.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sends.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSends.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSends.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sends = action.payload
      })
      .addCase(getSends.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSend.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSend.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sends = state.sends.filter(
          (send) => send._id !== action.payload.id
        )
      })
      .addCase(deleteSend.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = sendSlice.actions
export default sendSlice.reducer
