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
  const headers = getHeaders();
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  if(response.data.status === 500){
    return null;
  }
  return url;
};

// export const checkingPhoto = async () => {
//   const email = getEmail();
//   const url = `${API_PAYPAY}/img/${email}`;
//   const response = await Api({
//     url,
//     method: "get",
//   });
//   console.log(response);
//   return response;
// };

