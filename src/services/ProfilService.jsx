import Api, { getEmail, getHeaders } from "../API/Api";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const ProfilService = async (data) => {
  const email = getEmail();
  const url = `${API_PAYPAY}/img/${email}`;
  const headers = getHeaders();
  const response = await Api({
    url,
    method: "post",
    data,
    headers,
  });
  console.log(response);
  return response;
};

export const getPhoto = async () => {
  const email = getEmail();
  const url = `${API_PAYPAY}/img/${email}`;
  // const headers = getHeaders();
  // const response = await Api({
  //   url,
  //   method: "get",
  //   headers,
  // });
  return url;
};

