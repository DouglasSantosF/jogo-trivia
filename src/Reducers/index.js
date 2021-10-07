import { combineReducers } from 'redux';
import reducerLogin from './reducerLogin';
import reducerQuestions from './reducerQuestions';
import reducerPlacar from './reducerPlacar';
import reducerConfig from './reducerConfig';

const rootReducer = combineReducers({
  reducerLogin, reducerQuestions, reducerPlacar, reducerConfig,
});

export default rootReducer;
