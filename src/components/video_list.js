import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map((video, i) => 
          <VideoListItem
            onVideoSelect={this.props.onVideoSelect}
            video={video} 
            key={video.etag} 
          />
        )}
      </ul>
    );
  }
};

export default VideoList;