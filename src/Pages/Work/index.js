import React from 'react';
import fetchYears from '../../Api/FetchYears';
import Year from "../../Components/Year";
import './Work.css';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      years: []
    };
  }

  async componentDidMount() {
    const years = await fetchYears();
    this.setState({years: years.sort((a, b) => b.year - a.year)});
    console.log(this.state.years);
  }


  render() {

    if (this.state.years.length) {
      const years = this.state.years.map(year => (
        <Year key={year.year} year={year.year} content={year.content}/>
      ));

      return years;
    } else {
      return <p>loading...</p>;
    }
  }
}
