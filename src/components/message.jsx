import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <li>
       <h1> {message.author} </h1>
      <p> {message.content} </p>
      <p> {message.created_at} </p>
      </li>

    );
  }
}
