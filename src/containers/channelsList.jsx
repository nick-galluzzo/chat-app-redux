import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelsList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.channelFromParams !== nextProps.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  getStyle = (channel) => {
    if (channel === this.props.channelFromParams) {
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
      <div className="channels-list">
        <div className="channel-list">
          <h4>Redux App Chat</h4>
          <h6 style={{ opacity: ".6" }}>{this.props.currentUser}</h6>
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
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);

