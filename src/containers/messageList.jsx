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
    // change back to 5000
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  };

  scrollToBottom = () => {
    this.list.scrollIntoView({ behavior: 'smooth' });
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
        <div className="message-information">
          <div className="channel-title">
            <h3>Channel </h3>
            <h3 className='selected-channel'> #{this.props.channelFromParams}</h3>
          </div>
          <div className='channel-content'>
            { this.renderMessages() }
          </div>
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
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
