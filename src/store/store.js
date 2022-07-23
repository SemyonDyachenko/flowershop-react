import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './slices/userSlice'

const store = configureStore(
  {
    reducer: {
      user: userReducer,
    },
  },
  thunk,
)

export default store
