import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import ImageReducer from './ImageReducer'
import UserReducer from './UserReducer';
import UserSongReducer from './UserSongReducer'
import UserImages from './UserImages';
import currentImage from './UserCurrentImage';
import ImageCountReducer from './ImageCountReducer'



const rootReducer = combineReducers({
      inputValue: FormReducer,
      urlValue: ImageReducer,
      userValue: UserReducer,
      userSong: UserSongReducer,
      userImgs: UserImages,
      currentImage: currentImage,
      imageCount: ImageCountReducer
});


export default rootReducer;
