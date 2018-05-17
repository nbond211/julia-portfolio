import React from 'react';
import fetchYears from '../../Api/FetchYears';
import Year from "../../Components/Year";
import OverlayPlayer from "../../Components/OverlayPlayer";
import './Work.css';

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
    const years = await fetchYears();
    this.setState({years: years.sort((a, b) => b.year - a.year)});
  }

  selectWork = id => {
    this.setState({selectedWorkId: id});
  };

  toggleOverlay = () => {
    const {isOverlayOpen} = this.state;
    this.setState({isOverlayOpen: !isOverlayOpen});
  };


  render() {

    if (this.state.years.length) {
      const years = this.state.years.map(year => (
        <Year toggleOverlay={this.toggleOverlay} selectWork={this.selectWork} key={year.year} year={year.year} endYear={year["end_year"]} content={year.content}/>
      ));

      return [<OverlayPlayer isOpen={this.state.isOverlayOpen} selectedWorkId={this.state.selectedWorkId} toggleOverlay={this.toggleOverlay} key="overlay"/>, years];
    } else {
      return <p>loading...</p>;
    }
  }
}
