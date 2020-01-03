import { combineReducers } from 'redux';
import channelsReducer from './channelsReducer';
import currentUserReducer from './currentUserReducer';
import messagesReducer from './messagesReducer';
import selectedChannelReducer from './selectedChannelReducer';



const rootReducer = combineReducers({
  channels: channelsReducer,
  currentUser: currentUserReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer
});

export default rootReducer;
