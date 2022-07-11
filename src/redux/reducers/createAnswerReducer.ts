const defaultState = {
  users: [],
};

export const createAnswerReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    default:
      return { ...state, isWorking: true };
  }
};
