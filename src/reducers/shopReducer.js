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
export const shopTypes = {
  FETCH_SHOP: "FETCH_SHOP",
  UPDATE_SHOP: "UPDATE_SHOP",
  CREATE_SHOP: "CREATE_SHOP",
  DELETE_SHOP: "DELETE_SHOP"
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
export const shopAction = {
  fetchShop: () => ({ type: shopTypes.FETCH_SHOP }),
  updateShop: shopInfo => ({ type: shopTypes.UPDATE_SHOP, shopInfo }),
  createShop: () => ({ type: shopTypes.CREATE_SHOP }),
  deleteShop: id => ({ type: shopTypes.DELETE_SHOP, id })
};

/**
 * 리듀서의 초기 값 설정
 */
const initialState = {
  shop: [
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: true,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: false,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: false,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false,
      owner: {}
    }
  ]
};

/**
 * 리듀서
 */
export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case shopTypes.FETCH_SHOP:
      return {
        ...state,
        shop: action.shop
      };
    case shopTypes.UPDATE_SHOP:
      return {
        ...state,
        shop: action.shop
      };
    case shopTypes.CREATE_SHOP:
      return {
        ...state,
        shop: action.shop
      };
    case shopTypes.DELETE_SHOP:
      return {
        ...state
      };
    default:
      return { ...state };
  }
}
