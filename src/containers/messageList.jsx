import React from 'react';
import { connect } from 'react-redux';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
      {console.log(messages)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

export default connect(mapStateToProps)(MessageList);
