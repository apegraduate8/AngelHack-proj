import { UserInfo} from '../Actions/constants'


export default function(state = "" , action){
  switch(action.type) {
    case UserInfo:
      console.log("UserInfo form case", action.payload)
      // let p = {...state, form: action.payload}
      return action.payload

    default: return state
  }

}
