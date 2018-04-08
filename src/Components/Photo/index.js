import React from 'react';
import './Photo.css';

export default class extends React.Component {

  render() {
    const {id, dimensions, medium, preview_image, title} = this.props;
    const previewImageUrl = preview_image.url;

    const {height, width} = preview_image.dimensions;

    const isTall = height / width >= 1.2;

    console.log(title, isTall);

    return ([
        <div className={`col-md-${isTall ? 3 : 4}`}>
          <div className="photo-container">
            <div className="photo-preview-image">
              <img src={previewImageUrl}/>
            </div>
            <p className="photo-title">{title}</p>
            <p className="photo-info">{medium} <span className="photo-dimensions">{dimensions}</span></p>
          </div>
        </div>
    ]);
  }
}
