import { ASK_USERNAME } from '../actions/index';

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case ASK_USERNAME:
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;
