import Api, { getEmail, getHeaders } from "../API/Api";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const getUserbyEmail = async() => {
  const email = getEmail();
  const url = `${API_PAYPAY}/${email}`;
  const headers = getHeaders();
  const response = await Api({
    url,
    method:"get",
    headers
  });
  console.log("Response get user data : ", response);
  return response;
};
