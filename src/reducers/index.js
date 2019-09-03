import { testAction } from "../actions";


export const initializeState = {
    text: 'test입니다.',
};

export default (state = initializeState, action) => {
switch (action.type) {
    case testAction.type.GET_TEST:
    return {
        ...state,
        text: action.payload,
      };
    case testAction.type.SET_TEST:
    return {
        ...state,
        text: action.payload,
    };
    default:
    return Object.assign({}, state);
}
};
  