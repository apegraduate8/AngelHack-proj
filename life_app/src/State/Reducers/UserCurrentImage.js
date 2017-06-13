import { UsercurrentImage } from '../Actions/constants'


export default function(state = [] , action){
  console.log(state)
  switch(action.type) {
    case UsercurrentImage:

      // return {...state, form: action.payload}
      return state.concat(...action.payload)
       console.log("UPDATE_ current image >>>> ", action.payload)


    default: return state
  }



}

