import React from 'react';
import LazyLoad from 'react-lazyload';
import './Video.css';

export default class extends React.Component {

  onClick = () => {
    const {id, selectWork, toggleOverlay} = this.props;
    selectWork(id);
    toggleOverlay();
  };

  render() {
    const {duration, metadata, preview_image, title} = this.props;
    const previewImageUrl = preview_image.url;

    return (
      <div className="col-md-4 col-sm-6 video-column">
        <div onClick={this.onClick} className="video-container">
          <LazyLoad once>
            <div className="video-preview-image">
              <img className="play-icon" src="/images/play.svg" alt="play icon"/>
              <img className="preview-img" src={previewImageUrl} alt={title}/>
            </div>
          </LazyLoad>
          <p className="video-title">{title}</p>
          <div className="video-info-container">
            <p className="video-info">{duration}</p>
            <div className="video-info-separator">&nbsp;</div>
            <p className="video-info">{metadata}</p>
          </div>
        </div>
      </div>
    );

  }
}
