import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li className="list-group-item">
      <button onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt={videoTitle} />
          </div>
        </div>
        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </button>
    </li>
  );
};

export default VideoListItem;
