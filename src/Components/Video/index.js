import React from 'react';
import './Video.css';

export default class extends React.Component {

  render() {
    const {id, duration, metadata, preview_image, title} = this.props;
    const previewImageUrl = preview_image.url;

    return (
      <div className="col-md-4 video-column">
        <div className="video-container">
          <div className="video-preview-image">
            <img src={previewImageUrl}/>
          </div>
          <p className="video-title">{title}</p>
          <p className="video-info"><span className="video-duration">{duration}</span> {metadata}</p>
        </div>
      </div>
    );

  }
}
