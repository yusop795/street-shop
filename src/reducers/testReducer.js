// Ducks 패턴

/**
 * 액션 타입 정의
 * 타입 = '리듀서명/타입'
 */
export const testTypes = {
  UPDATE_TEXT: 'test/UPDATE_TEXT',
  UPDATE_NUM_INCREMENT: 'test/UPDATE_NUM_INCREMENT',
  UPDATE_NUM_DECREMENT: 'test/UPDATE_NUM_DECREMENT',
};

/**
 * 액션 생섬함수 정의
 * @param 변경할 텍스트 값
 * { type: 액션타입, 데이터}
 */
export const testAction = {
  updateText: (text) => ({ type: testTypes.UPDATE_TEXT, text }),
  updateNumIncrement: () => ({ type: testTypes.UPDATE_NUM_INCREMENT }),
  updateNumDecrement: () => ({ type: testTypes.UPDATE_NUM_DECREMENT }),
};

/**
 * 리듀서의 초기 값 설정
 */
const initialState = {
  text: '초기 텍스트',
  num: 0,
};

/**
 * 리듀서
 */
export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case testTypes.UPDATE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case testTypes.UPDATE_NUM_INCREMENT:
      return {
        ...state,
        num: state.num + 1,
      };
    case testTypes.UPDATE_NUM_DECREMENT:
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return state;
  }
}
