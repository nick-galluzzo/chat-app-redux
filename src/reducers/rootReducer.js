import { combineReducers } from 'redux';
import channelsReducer from './channelsReducer';
import currentUserReducer from './currentUserReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  channels: channelsReducer,
  currentUser: currentUserReducer,
  messages: messagesReducer,
});

export default rootReducer;
