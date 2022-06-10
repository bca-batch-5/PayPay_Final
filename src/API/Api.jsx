import axios from "axios";

const Api = async ({url, method, data, headers}) => {
  const responseAxios = await axios({
      url,
      method,
      data,
      headers:headers,
  }).catch((err) => err.response);
  
  return responseAxios;
};

export default Api;