import React from 'react';
import Photo from "../Photo";
import Video from "../Video";
import './Year.css';

export default class extends React.Component {

  render() {
    const {year, content} = this.props;

    const yearContent = content.map(work => {
      const {type} = work;
      if (type === "photo") {
        const {dimensions, id, medium, preview_image, title} = work;
        return (
          <Photo dimensions={dimensions} id={id} medium={medium} preview_image={preview_image} title={title} key={id}/>
        );
      } else if (type === "video") {
        const {duration, id, metadata, preview_image, title} = work;
        return (
          <Video duration={duration} id={id} metadata={metadata} preview_image={preview_image} title={title} key={id}/>
        );
      }
    });

    return (
      <div className="year">
        <h2 className="year-title">{year}</h2>
        <div className="year-content-grid row">
          {yearContent}
        </div>
      </div>
    );


  }
}
