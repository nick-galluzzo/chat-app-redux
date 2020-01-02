import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/index';

const messagesReducer = (state = [], action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES:
      let newState = state;
      newState = action.payload.messages;

      return newState;
    case CREATE_MESSAGE:
      newState = state;
      newState.push(action.payload);

      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
