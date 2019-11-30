// Ducks 패턴

/**
 * 액션 타입 정의
 * 타입 = '리듀서명/타입'
 */
const types = {
  FETCH_MAP: 'home/FETCH_MAP',
  FETCH_MAP_SUCCESS: 'home/FETCH_MAP_SUCCESS',
};

/**
 * 액션 생섬함수 정의
 * @param 변경할 텍스트 값
 * { type: 액션타입, 데이터}
 */
const actions = {
  fetchMap: (location) => ({ type: types.FETCH_MAP, location }),
  fetchMapSuccess: (payload) => ({ type: types.FETCH_MAP_SUCCESS, payload }),
};

export { types as homeTypes, actions as homeActions };

/**
 * 리듀서의 초기 값 설정
 */
const initialState = {
  location: {},
  address: {},
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
    case types.FETCH_MAP_SUCCESS:
      return {
        ...state,
        address: action.payload.documents[0].address,
      };

    default:
      return state;
  }
}
