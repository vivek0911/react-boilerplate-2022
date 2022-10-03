import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  error: null,
  inProgress: false,
  createdOrUpdated: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.inProgress = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setData: (state, action) => {
      state.data = action.payload
    },
    setCreatedOrUpdated: (state, action) => {
      state.createdOrUpdated = action.payload
    },
    resetCreatedOrUpdated: (state) => {
      state.createdOrUpdated = false
    },
    reset: () => initialState,
  },
})

export default slice
