import React from 'react';
import { emojify } from 'react-emojione';

export function strToRGB(str) {
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
  render() {
    const { message } = this.props;
    const time = new Date(message.created_at).toLocaleTimeString([], {timeStyle: 'short'});
    return (
      <div className="messages">
      <i className="author">
        <h5 style={{ color: strToRGB(message.author)}}> {message.author}</h5>
        <small style={{opacity: '.6'}}>- {time}</small>
      </i>
        <p>{emojify(message.content)}</p>
      </div>
    );
  }
}
