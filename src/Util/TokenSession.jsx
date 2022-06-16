import jwt_decode from "jwt-decode";

export function checkingTokenNotAvailable(token) {
  let link;
  if (token === null) {
    link = "/";
    return link;
  }
}

export function checkingTokenAvailable() {
  const token = localStorage.getItem("user");
  let link;
  if (token != null) {
    link = "/home";
    return link;
  }
}

export function tokenExpired(token) {
  let link;
  const user = JSON.parse(token);
  const decodeJWT = jwt_decode(user.accessToken);
  if (decodeJWT.exp * 1000 < Date.now()) {
    console.log("token habis");
    link = "/";
    return link;
  }

  console.log("decode JWT: ", decodeJWT.exp * 1000);
  console.log("current time: ", Date.now());
}

export function deleteToken() {
  localStorage.removeItem("user");
}
