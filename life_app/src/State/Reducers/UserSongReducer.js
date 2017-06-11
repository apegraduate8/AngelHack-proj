import { UserSong } from '../Actions/constants'


export default function(state = null , action){
  switch(action.type) {
    case UserSong:
      console.log("UserInfo form case", action.payload)
      // let p = {...state, form: action.payload}
      return action.payload

    default: return state
  }

}

