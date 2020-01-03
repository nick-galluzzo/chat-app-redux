import React from 'react';

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="messages">
        <h4 style={{ color: strToRGB(message.author)}}> {message.author} </h4>
        <p> {message.content} </p>
      </div>
    );
  }
}
