import { combineReducers, createStore } from 'redux'
import { reducerBoxLoading } from 'mui-helpers'

export default createStore(
  combineReducers({
    box_loading: reducerBoxLoading
  })
)
