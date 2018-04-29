import React from 'react';
import fetchResume from '../../Api/FetchResume';
import './Resume.css';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      years: [],
      isOverlayOpen: false,
      selectedWorkId: undefined
    };
  }

  async componentDidMount() {
    await fetchResume();
    // this.setState({years: years.sort((a, b) => b.year - a.year)});
  }

  render() {

    if (this.state.years.length) {
      return <p>test</p>
    } else {
      return <p>loading... <em>hello hello testing 1 2 3 testing standard tuesday</em></p>;
    }
  }
}
