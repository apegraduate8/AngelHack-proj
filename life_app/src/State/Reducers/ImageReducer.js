import { UPDATE_url } from '../Actions/constants'


export default function(state = "" , action){
  switch(action.type) {
    case UPDATE_url:
      console.log("UPDATE_ form case", action.payload)
      // let p = {...state, form: action.payload}
      return action.payload

    default: return state
  }
}

