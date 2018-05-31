import Prismic from 'prismic-javascript';

export default async function() {
  let PrivateKeys;
  if (!process.env.API_ENDPOINT) {
    PrivateKeys = false; //require("../PrivateKeys");
  }
  // let {apiEndpoint, accessToken} = PrivateKeys;
  if (!apiEndpoint) apiEndpoint = process.env.API_ENDPOINT;
  if (!accessToken) accessToken = process.env.ACCESS_TOKEN;
  return await Prismic.api(apiEndpoint, {accessToken});
}
