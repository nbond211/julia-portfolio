import React from 'react';
import FetchYears from './Api/FetchYears';

export default class Preview extends React.Component {

  async componentDidMount(props) {
    await FetchYears();
  }

  render() {
    return <p>Loading previews...</p>;
  }
}
