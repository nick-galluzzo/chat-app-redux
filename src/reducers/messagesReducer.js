import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/index';

const messagesReducer = (state = [], action) => {
  if (state === null) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case CREATE_MESSAGE: {
      const newState = state.slice(0);
      newState.push(action.payload);

      return newState;
    }
    default:
      return state;
  }
};

export default messagesReducer;
