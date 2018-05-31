import Prismic from 'prismic-javascript';

export default async function() {
  let PrivateKeys, apiEndpoint, accessToken;

  if (process.env.API_ENDPOINT) {
    apiEndpoint = process.env.API_ENDPOINT;
    accessToken = process.env.ACCESS_TOKEN;
  } else {
    PrivateKeys = require("../PrivateKeys.js");
    console.log(PrivateKeys);
    apiEndpoint = PrivateKeys.apiEndpoint;
    accessToken = PrivateKeys.accessToken;
  }
  return await Prismic.api(apiEndpoint, {accessToken});
}
