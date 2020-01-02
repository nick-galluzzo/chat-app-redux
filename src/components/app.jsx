import React from 'react';
import MessageList from '../containers/messageList';
import ChannelsList from '../containers/channelsList';

const App = () => {
  return (
    <div className="app">
      <ChannelsList />
      <MessageList />
    </div>
  );
};

export default App;
