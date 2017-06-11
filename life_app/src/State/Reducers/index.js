import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import ImageReducer from './ImageReducer'
import UserReducer from './UserReducer';
import UserSongReducer from './UserSongReducer'



const rootReducer = combineReducers({
      inputValue: FormReducer,
      urlValue: ImageReducer,
      userValue: UserReducer,
      userSong: UserSongReducer
});


export default rootReducer;
