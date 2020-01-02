import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
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
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
