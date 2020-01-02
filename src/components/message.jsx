import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="messages">
        <h4> {message.author} </h4>
        <p> {message.content} </p>
      </div>
    );
  }
}
