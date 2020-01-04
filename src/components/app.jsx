import React from 'react';
import MessageList from '../containers/messageList';
import ChannelsList from '../containers/channelsList';

const App = (props) => {
  return (
    <div className="app">
      <ChannelsList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
