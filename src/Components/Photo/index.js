import React from 'react';
import './Photo.css';

export default class extends React.Component {

  render() {
    const {id, dimensions, medium, title} = this.props;
    const previewImageUrl = this.props['preview_image'].url;

  }
}
