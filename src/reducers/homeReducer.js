// Ducks 패턴

/**
 * 액션 타입 정의
 * 타입 = '리듀서명/타입'
 */
const types = {
  FETCH_MAP: 'test/FETCH_MAP',
};

/**
 * 액션 생섬함수 정의
 * @param 변경할 텍스트 값
 * { type: 액션타입, 데이터}
 */
const actions = {
  fetchMap: (location) => ({ type: types.FETCH_MAP, location }),
};

export { types as homeTypes, actions as homeActions };

/**
 * 리듀서의 초기 값 설정
 */
const initialState = {
  location: { x: 0, y: 0 },
};

/**
 * 리듀서
 */
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MAP:
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
}
