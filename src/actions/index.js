import { createAction } from 'redux-actions';
export const getTest = createAction('@test', text => text);