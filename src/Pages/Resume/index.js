import React from 'react';
import {RichText} from 'prismic-reactjs';
import fetchResume from '../../Api/FetchResume';
import './Resume.css';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      resume: false
    };
  }

  async componentDidMount() {
    const resume = await fetchResume();
    this.setState({resume});
  }

  render() {
    if (this.state.resume) {
      const {education, exhibitions, professional_activity} = this.state.resume;

      return (
        <div className="row">
          <div className="col-md-4 resume-section">{RichText.render(education)}</div>
          <div className="col-md-4 resume-section">{RichText.render(exhibitions)}</div>
          <div className="col-md-4 resume-section">{RichText.render(professional_activity)}</div>
        </div>
      )
    } else {
      return <p>loading...</p>;
    }
  }
}
