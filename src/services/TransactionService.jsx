import Api, { getEmail, getHeaders } from "../API/Api";
import { getPhotoByEmail } from "./ProfilService";

const API_PAYPAY = process.env.REACT_APP_API_PAYPAY;

export const NotifService = async () => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/transaksi/limit4/${email}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  return response;
};

export const HistoryHomeService = async () => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/transaksi/limit5/${email}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  return response;
};

export const HistoryService = async () => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/transaksi/${email}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  return response;
};

export const transferService = async (data) => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/transfer/${email}`;
  const response = await Api({
    url,
    data,
    method: "post",
    headers,
  });
  return response;
};
export const updateBalance = async (email) => {
  const headers = getHeaders();
  const getEmail = email;
  const url = `${API_PAYPAY}/transaksi/balance/${getEmail}`;
  const response = await Api({
    url,
    method: "put",
    headers,
  });
  return response;
};

export const transactionKredit = async () => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/transaksi/limit7/Kredit/${email}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  return response;
};

export const transactionDebit = async () => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/transaksi/limit7/Debit/${email}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  return response;
};

export const getReceiverProfil = async () => {
  const headers = getHeaders();
  const email = getEmail();
  const url = `${API_PAYPAY}/receiver-profil/${email}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  console.log("getReceiver", response);
  return response;
};

export const getReceiverProfilByEmail = async (email) => {
  const headers = getHeaders();
  const getEmail = email;
  const url = `${API_PAYPAY}/receiver-profil/email/${getEmail}`;
  const response = await Api({
    url,
    method: "get",
    headers,
  });
  console.log("getReceiver", response);
  return response;
};
