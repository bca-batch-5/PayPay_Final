import Api from "../API/Api";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const AuthService = async (data) => {
  const url = `${API_PAYPAY}/login`;
  const response = await Api({
    url,
    method: "post",
    data,
  });
  if (response.data.status < 400) {
    const token = response.data.data.accessToken;
    if (response.data.status === 201 && token) {
      alert("Login Berhasil");
      console.log(`Response API Login`, response);
      const user = response.data.data;
      localStorage.setItem("user", JSON.stringify(user));
      console.log(token);
    } else {
      console.log(response);
    }
  }
  return response;
};
