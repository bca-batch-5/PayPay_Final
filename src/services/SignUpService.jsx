import Api from "../API/Api";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const SignUpService = async (data) => {
  const url = `${API_PAYPAY}/register`
  const response = await Api({
      url,
      method:"post",
      data
  });
  console.log(`Responsse API SignUp : ${response}`);
  return response;
}

export const CreatePinService = async (data) => {
  const url = `${API_PAYPAY}/create-pin`
  const response = await Api({
      url,
      method:"post",
      data
  });
  console.log(`Responsse API InputPin : ${response.data}`);
  return response;
}