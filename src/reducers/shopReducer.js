const initializeState = {
  shop: [
    {
      name: '우리동네붕어빵',
      open_now: true,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: true,
    },
    {
      name: '우리동네붕어빵',
      open_now: false,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
    {
      name: '우리동네붕어빵',
      open_now: true,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
    {
      name: '우리동네붕어빵',
      open_now: true,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
    {
      name: '우리동네붕어빵',
      open_now: false,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
    {
      name: '우리동네붕어빵',
      open_now: true,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
    {
      name: '우리동네붕어빵',
      open_now: true,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
    {
      name: '우리동네붕어빵',
      open_now: true,
      distance: 500,
      category: '핫도그&커피',
      score: 4.5,
      rank: false,
    },
  ],
};

export default (state = initializeState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
