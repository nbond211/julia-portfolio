import Prismic from 'prismic-javascript';

export default async function() {
  let PrivateKeys;
  if (!process.env.API_ENDPOINT) {
    PrivateKeys = false; //require("../PrivateKeys");
  }
  // let {apiEndpoint, accessToken} = PrivateKeys;
  const apiEndpoint = process.env.API_ENDPOINT;
  const accessToken = process.env.ACCESS_TOKEN;
  return await Prismic.api(apiEndpoint, {accessToken});
}
