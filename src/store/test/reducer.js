import * as types from './constants'
  
  const initialState = {
    Data:[]
  }
  
  export default function todos(state = initialState, action) {
    switch (action.type) {
      case types.SAVE_DATA:
       const {params} = action
        return {
            ...state,
            Data:params
        }

      default:
        return state
    }
  }