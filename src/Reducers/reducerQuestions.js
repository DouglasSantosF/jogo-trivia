import { SET_LOADING, SET_QUESTIONS } from '../Actions';

const INITIAL_STATE = {
  questions: [],
  loading: false,
};

const reducerQuestions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_QUESTIONS:
    return ({
      ...state,
      questions: action.payLoad,
      loading: false,
    });
  case SET_LOADING:
    return ({
      ...state,
      loading: true,
    });
  default:
    return state;
  }
};

export default reducerQuestions;
