import Api, { getEmail, getHeaders } from "../API/Api";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const topUp = async(data) => {
  const email = getEmail();
  const url = `${API_PAYPAY}/topup/payment/${email}`;
  const headers = getHeaders();
  const response = await Api({
    url,
    method:"post",
    data,
    headers
  });
  console.log("TopUp res: ", response);
  return response;
};