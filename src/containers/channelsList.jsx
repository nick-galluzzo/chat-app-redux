import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelsList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel !== nextProps.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  getStyle = (channel) => {
    if (channel === this.props.selectedChannel) {
      return {
        color: 'green',
        cursor: 'default',
        fontStyle: 'bold',
        opacity: '.6'
      };
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannels() {
    const { channels } = this.props;
    return channels.map((channel) => {
      return (<li
        style={this.getStyle(channel)}
        onClick={() => this.handleClick(channel)}
        key={channel}
      >
        #{channel}
      </li>
      );
    });
  }

  render() {
    return (
      <div className='channels-list'>
        <div className="channels-list">
          <h4>{this.props.selectedChannel} chat</h4>
          <ul>
            { this.renderChannels() }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);

