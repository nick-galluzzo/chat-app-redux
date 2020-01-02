import { FETCH_MESSAGES } from '../actions/index';

const messagesReducer = (state = [], action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES:
      let newState = state;
      if (newState.length < 1 ){
        newState = [];
      } else {
        newState = action.payload;
      }

      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
