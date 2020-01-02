import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChannelsList extends React.Component {
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

  renderChannels() {
    const { channels } = this.props;
    return channels.map((channel) => {
      return <li style={this.getStyle(channel)}>{channel}</li>;
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

const mapStateToProps = (state) => ({
  channels: state.channels,
  selectedChannel: state.selectedChannel
});

export default connect(mapStateToProps)(ChannelsList);

