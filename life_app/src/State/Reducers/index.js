import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import ImageReducer from './ImageReducer'



const rootReducer = combineReducers({
      inputValue: FormReducer,
      urlValue: ImageReducer
});


export default rootReducer;
