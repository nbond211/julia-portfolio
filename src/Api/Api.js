import Prismic from 'prismic-javascript';
import PrivateKeys from "../PrivateKeys";

export default async function() {
  let {apiEndpoint, accessToken} = PrivateKeys;
  if (!apiEndpoint) apiEndpoint = process.env.API_ENDPOINT;
  if (!accessToken) accessToken = process.env.ACCESS_TOKEN;
  return await Prismic.api(apiEndpoint, {accessToken});
}
