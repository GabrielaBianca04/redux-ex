import{legacy_createStore} from 'redux'
import{configureStore} from '@reduxjs/toolkit'
import companiesReducer from './CompaniesReducer'

const store= configureStore({reducer:companiesReducer});
export default store;