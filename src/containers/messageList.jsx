import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMessages() {
    const { messages } = this.props;
    return messages.map((message) => {
      return (
        <Message message={message} key={message.created_at} />
      );
    });
  }

  render() {
    return (
      <ul>
        { this.renderMessages() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

export default connect(mapStateToProps)(MessageList);
