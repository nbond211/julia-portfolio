import React from 'react';
import './Year.css';

export default class extends React.Component {

  render() {
    const {year, content} = this.props;

    return (
      <div className="year">
        <h2 className="year-title">{year}</h2>
      </div>
    );


  }
}
