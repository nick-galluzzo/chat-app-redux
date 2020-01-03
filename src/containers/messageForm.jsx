import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage, askUsername } from '../actions/index';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    this.props.askUsername();
    this.messageInput.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    this.messageInput.focus();
  }

  handleMessage(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.content);
    this.setState({ content: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.content}
          placeholder="Write your message here..."
          onChange={this.handleMessage('content')}
          ref={(input) => { this.messageInput = input; }}
        />
        <button>
          Send Message
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  selectedChannel: state.selectedChannel
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage, askUsername }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
