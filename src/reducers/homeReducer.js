
const initializeState = {
  text: 'test입니다.',
};

export default (state = initializeState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
