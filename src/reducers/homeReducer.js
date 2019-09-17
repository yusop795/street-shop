import { testTypes } from '../actions/test';


const initializeState = {
  text: 'test입니다.',
};

export default (state = initializeState, action) => {
  switch (action.type) {
    case testTypes.GET_TEST:
      return {
        ...state,
        text: action.payload,
      };
    case testTypes.SET_TEST:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return { ...state };
  }
};
