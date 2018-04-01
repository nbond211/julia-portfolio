import React from 'react';
import './Video.css';

export default class extends React.Component {

  render() {
    const {id, duration, metadata, title} = this.props;
    const previewImageUrl = this.props['preview_image'].url;

  }
}
