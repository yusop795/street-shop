import { createAction } from 'redux-actions';

// action type
export const type = {
    GET_TEST:'@test/get/test',
    SET_TEST:'@test/set/Test'
}
// action
export const getTest = createAction(type.GET_TEST, text => 'getTest '+text);
export const setTest = createAction(type.SET_TEST, text => 'setTest '+text);