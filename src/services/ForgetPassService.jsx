import Api from "../API/Api";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const ForgetPassService = async (data) => {
    const url = `${API_PAYPAY}/forget-pass`;
    const response = await Api({
        url,
        method:"put",
        data
    });
    return response
}

export const newPassService = async (data) => {
    const url = `${API_PAYPAY}/forget-pass/new-pass`;
    const response = await Api({
        url,
        method:"put",
        data
    });
    return response
}

export const sendEmailForgetPass = async (data) => {
    const url = `${API_PAYPAY}/send-mail`;
    const response = await Api({
        url,
        method:"post",
        data
    });
    return response
}
