import {createStore,combineReducers} from 'redux'
import testReducer from './test/reducer'
import * as testActions from './test/actions'

const rootReducer = combineReducers({
    testStore:testReducer,
  })

export const store  = createStore(rootReducer);

console.log(store.getState())

export const actions = {
    ...testActions,
  }