import { ImageCount } from '../Actions/constants';

export default function(state = 0, action){
        switch(action.type) {
          case ImageCount:
              return action.payload
          default: return state
        }

}
