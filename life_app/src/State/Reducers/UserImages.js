import { UserImages } from '../Actions/constants'


export default function(state = "" , action){
  switch(action.type) {
    case UserImages:
      console.log("UserInfo form case", action.payload)
      let p = {...state, form: action.payload}
      return p.form

    default: return state
  }

}

