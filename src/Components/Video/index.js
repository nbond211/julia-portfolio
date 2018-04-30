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
              <img className="play-icon" src="/images/play.svg"/>
              <img className="preview-img" src={previewImageUrl}/>
            </div>
          </LazyLoad>
          <p className="video-title">{title}</p>
          <p className="video-info"><span className="video-duration">{duration}</span> {metadata}</p>
        </div>
      </div>
    );

  }
}
