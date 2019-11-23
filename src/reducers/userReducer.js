// Ducks 패턴

/**
 * 액션 타입 정의
 * 타입 = '리듀서명/타입'
 */
/*
  fetch, 기존에 있는 shop info를 받아온다
  update, 있는 shop info를 새로운 데이터로 업데이트
  create, 새로 shop info를 만든다
  delete, shop info 제거
*/
export const userTypes = {
  FETCH_USER: "FETCH_USER",
  UPDATE_USER: "UPDATE_USER",
  CREATE_USER: "CREATE_USER",
  DELETE_USER: "DELETE_USER"
};

/**
 * 액션 생섬함수 정의
 * @param 변경할 텍스트 값
 * { type: 액션타입, 데이터}
 */
/*
update 액션의 경우 기존에 있는 데이터 값을 바꿔주는 것이기 때문애
해당 데이터를 구분할 수 있는 id 값과 유저가 새롭게 넣어준 값을 보내 주어야 한다
*/
export const userAction = {
  fetchUser: () => ({ type: userTypes.FETCH_USER }),
  updateUser: userInfo => ({ type: userTypes.UPDATE_USER, userInfo }),
  createUser: () => ({ type: userTypes.CREATE_USER }),
  deleteUser: id => ({ type: userTypes.DELETE_USER, id })
};

/**
 * 리듀서의 초기 값 설정
 * 사장님과 소비자 모두 유저이기 때문에 user 리듀서로 관리한다.
 * type으로 구분 가능하며 type에 따른 detail은 다를 수 있다
 * 사장님의 경우 => 소유한 가게에 정보?
 * 소비자의 경우 => 즐겨찾기 한 가게, 별점 정보 등등
 */
const initialState = {
  user: [
    {
      name: "김아무개",
      type: "owner",
      detail: {}
    },
    {
      name: "홍길동",
      type: "customer",
      detail: {}
    }
  ]
};

/**
 * 리듀서
 */
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userTypes.FETCH_USER:
      return {
        ...state,
        user: action.uesr
      };
    case userTypes.UPDATE_USER:
      return {
        ...state,
        user: action.uesr
      };
    case userTypes.CREATE_USER:
      return {
        ...state,
        user: action.uesr
      };
    case userTypes.DELETE_USER:
      return {
        ...state
      };
    default:
      return { ...state };
  }
}
