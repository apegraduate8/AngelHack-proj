import { UPDATE_Form  } from '../Actions/constants'


export default function(state = {} , action){
  switch(action.type) {
    case UPDATE_Form:
      console.log("UPDATE_ form case", action.payload)
      let p = {...state, form: action.payload}
      return p.form

    default: return state
  }



}
