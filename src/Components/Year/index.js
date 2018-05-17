import React from 'react';
import Photo from "../Photo";
import Video from "../Video";
import './Year.css';

export default class extends React.Component {

  render() {
    const {year, endYear, content, selectWork, toggleOverlay} = this.props;
    
    const yearContent = content.map(work => {
      const {type} = work;
      if (type === "photo") {
        const {dimensions, id, medium, preview_image, title} = work;
        return (
          <Photo dimensions={dimensions} id={id} medium={medium} preview_image={preview_image} title={title} key={id} selectWork={selectWork} toggleOverlay={toggleOverlay}/>
        );
      } else if (type === "video") {
        const {duration, id, metadata, preview_image, title} = work;
        return (
          <Video duration={duration} id={id} metadata={metadata} preview_image={preview_image} title={title} key={id} selectWork={selectWork} toggleOverlay={toggleOverlay}/>
        );
      }
    });

    return (
      <div className="year">
        <h2 className="year-title">{year && endYear ? `${year} - ${endYear}` : year}</h2>
        <div className="year-content-grid row">
          {yearContent}
        </div>
      </div>
    );


  }
}
