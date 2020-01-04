import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchMessages } from '../actions/index';

class ChannelsList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.channelFromParams !== nextProps.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  getStyle = (channel) => {
    if (channel === this.props.channelFromParams) {
      console.log('same');
      return {
        color: 'green',
        cursor: 'default',
        fontStyle: 'bold',
        opacity: '.6'
      };
    }
  }

  renderChannels() {
    const { channels } = this.props;
    return channels.map((channel) => {
      return (<li key={channel}>
        <Link to={`/${channel}`} style={this.getStyle(channel)}>
          #{channel}
        </Link>
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
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);

