import React from 'react';
import './Year.css';

export default class extends React.Component {

  render() {
    const {year, content} = this.props;

    return (
      <h2>{year}</h2>
    );


  }
}
