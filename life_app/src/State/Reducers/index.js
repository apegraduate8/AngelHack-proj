import { combineReducers } from 'redux';
import FormReducer from './FormReducer'



const rootReducer = combineReducers({
      inputValue: FormReducer
});


export default rootReducer;
