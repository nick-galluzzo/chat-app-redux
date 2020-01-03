import { SELECT_CHANNEL } from '../actions/index';

function selectedChannelReducer (state = 'nyc', action) {
  switch (action.type) {
    case SELECT_CHANNEL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default selectedChannelReducer;
