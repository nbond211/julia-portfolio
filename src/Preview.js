import React from 'react';
import Prismic from 'prismic-javascript';
import Api from './Api';

export default class Preview extends React.Component {

  async componentDidMount(props) {
    const api = await Api();
    const response = await api.query(
      Prismic.Predicates.at('document.type', 'work')
    );
    console.log(response);
  }

  render() {
    return <p>Loading previews...</p>;
  }
}
