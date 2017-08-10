import {combineReducers} from 'react-redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;
