import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = configureStore({ reducer: rootReducer }, thunk)

export default store
