import React from 'react';
import LazyLoad from 'react-lazyload';
import './Photo.css';

export default class extends React.Component {

  onClick = () => {
    const {id, selectWork, toggleOverlay} = this.props;
    selectWork(id);
    toggleOverlay();
  };

  render() {
    const {dimensions, medium, preview_image, title} = this.props;
    const previewImageUrl = preview_image.url;

    const {height, width} = preview_image.dimensions;

    const isTall = height / width >= 1.2;


    return (
        <div onClick={this.onClick} className={`photo-column col-sm-${isTall ? 5 : 6} col-md-${isTall ? 3 : 4}`}>
          <div className="photo-container">
            <LazyLoad once>
              <div className="photo-preview-image">
                <img src={previewImageUrl}/>
              </div>
            </LazyLoad>
            <p className="photo-title">{title}</p>
            <p className="photo-info">{medium} <span className="photo-dimensions">{dimensions}</span></p>
          </div>
        </div>
    );
  }
}
