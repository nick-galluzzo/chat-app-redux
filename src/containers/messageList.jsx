import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components / Containers
import Message from '../components/message';
import MessageForm from './messageForm';

// Actions
import { fetchMessages } from '../actions/index';

class MessageList extends React.Component {
  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };

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
    <div>
      <ul>
        { this.renderMessages() }
      </ul>

      <MessageForm />
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  selectedChannel: state.selectedChannel
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
