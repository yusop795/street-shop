import { createAction } from 'redux-actions';

// action type
export const testTypes = {
  GET_TEST: '@test/get/Test',
  SET_TEST: '@test/set/Test',
};

// action
const getTest = createAction(testTypes.GET_TEST, (text) => `getTest ${text}`);
const setTest = createAction(testTypes.SET_TEST, (text) => `setTest ${text}`);

export const testActions = {
  getTest,
  setTest,
};
