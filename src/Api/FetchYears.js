import Prismic from 'prismic-javascript';
import Api from './Api';

function getPortfolioPiece(content) {
  const portfolioPiece = content['portfolio_piece'];
  const {id, type} = portfolioPiece;
  let {data} = portfolioPiece;
  data = {...data, title: data.title[0].text}
  data.id = id;
  data.type = type;
  return data;
}

export default async function() {
  const api = await Api();
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'year'), {'fetchLinks': ['video.title', 'video.duration', 'video.metadata', 'video.preview_image', 'photo.title', 'photo.medium', 'photo.dimensions', 'photo.preview_image']}
  );
  const {results} = response;

  return results.map(val => {return {...val.data, content: val.data.content.map(content => getPortfolioPiece(content))}});
}
