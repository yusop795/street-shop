import { testTypes } from "../actions/test";

const initializeState = {
  shop: [
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: true
    },
    {
      name: "우리동네붕어빵",
      open_now: false,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    },
    {
      name: "우리동네붕어빵",
      open_now: false,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    },
    {
      name: "우리동네붕어빵",
      open_now: true,
      distance: 500,
      category: "핫도그&커피",
      score: 4.5,
      rank: false
    }
  ]
};

export default (state = initializeState, action) => {
  switch (action.type) {
    case testTypes.GET_TEST:
      return {
        ...state,
        text: action.payload
      };
    case testTypes.SET_TEST:
      return {
        ...state,
        text: action.payload
      };
    default:
      return { ...state };
  }
};
