import { SET_CONFIG } from '../Actions';

const INITIAL_STATE = {
  configuration: {
    difficulty: '',
    category: '',
    type: '',
  },
};
const reducerConfig = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_CONFIG:
    return ({
      ...state,
      difficulty: action.payLoad.difficulty,
      category: action.payLoad.category,
      type: action.payLoad.type,
    });
  default:
    return state;
  }
};

export default reducerConfig;
