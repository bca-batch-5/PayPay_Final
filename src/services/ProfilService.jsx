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
    headers
  });
  console.log(response);
  return response;
};

export const getPhoto = async () => {
  const email = getEmail();
  const url = `${API_PAYPAY}/img/${email}`;
  const response = await Api({
    url,
    method: "get",
  });
  if(response.data.status === 500){
    return null;
  }
  return url;
};

export const getPhotoByEmail = async (email) => {
  const emailget = email;
  const url = `${API_PAYPAY}/img/${emailget}`;
  const response = await Api({
    url,
    method: "get",
  });
  if(response.data.status === 500){
    return null;
  }
  return url;
};

export const addPhoneNumber = async (data) => {
  const email = getEmail();
  const url = `${API_PAYPAY}/add-phone/${email}`;
  const headers = getHeaders();
  const response = await Api({
    url,
    method: "post",
    data,
    headers
  });
  console.log(response);
  return response;
};

export const deletePhoneNumber = async () => {
  const email = getEmail();
  const url = `${API_PAYPAY}/delete-phone/${email}`;
  const headers = getHeaders();
  const response = await Api({
    url,
    method: "delete",
    headers
  });
  console.log(response);
  return response;
};

export const changePassword = async (data) => {
  const email = getEmail();
  const url = `${API_PAYPAY}/change-pass/${email}`;
  const headers = getHeaders;
  const response = await Api(
    {
      url,
      data,
      method: "put",
      headers
    }
  )
}