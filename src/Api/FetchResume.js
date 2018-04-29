import Prismic from 'prismic-javascript';
import Api from './Api';

export default async function() {
  const api = await Api();
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'resume'));
  console.log(response.results[0].data);
  return response.results[0].data;
}
