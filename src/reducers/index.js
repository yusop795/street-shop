// import { IStoreState } from "../store";



export const initializeState = {
    text: 'test입니다.',
};

export default (state = initializeState, action) => {
switch (action.type) {
    case '@test':
    return {
        ...state,
        text: action.payload,
      };
    default:
    return Object.assign({}, state);
}
};
  