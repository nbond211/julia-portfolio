import Prismic from 'prismic-javascript';
import PrivateKeys from "../PrivateKeys";

export default async function() {
  const {apiEndpoint, accessToken} = PrivateKeys;
  return await Prismic.api(apiEndpoint, {accessToken});
}
