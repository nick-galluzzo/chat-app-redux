import { combineReducers } from 'redux';
import  channelsReducer from './channelsReducer';
import  currentUserReducer from './currentUserReducer';
import  messagesReducer from './messagesReducer';
import  selectedChannelReducer from './selectedChannelReducer';


// const initializeState = {
//   messages: [],
//   channels: ['general', 'nyc', 'redux'],
//   selectedChannel: 'nyc',
//   currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
// };

const rootReducer = combineReducers({
  channels: channelsReducer,
  currentUser: currentUserReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer
});

export default rootReducer;
