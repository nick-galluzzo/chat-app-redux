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
    this.scrollToBottom();
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  };

  scrollToBottom = () => {
    this.list.scrollIntoView({ behavior: 'smooth'});
  }

  renderMessages() {
    const { messages } = this.props;
    return messages.map((message) => {
      return (
        <Message message={message} key={message.id} />
      );
    });
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <h1>Channel #{this.props.selectedChannel}</h1>
        </div>
        <div className='channel-content'>
          { this.renderMessages() }
        </div>
        <div ref={(list) => { this.list = list; }}>
          <MessageForm />
        </div>
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
