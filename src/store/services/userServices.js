import axios from "axios";

export async function getUserList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userList",
  });
}

export async function userSignIn(email, password) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/signin",
    data: {
      email,
      password,
    },
  });
}

export async function getUserInfo(token) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userInfo",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateUserProfilePic(token, data) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userProfilePic",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function userRegister(
  name,
  lastname,
  email,
  address,
  phone,
  password
) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/signup",
    data: {
      name,
      lastname,
      email,
      address,
      phone,
      password,
    },
  });
}

export async function userUpdate(
  token,
  name,
  lastname,
  dniType,
  dni,
  address,
  neighborhood,
  phone,
  height,
  weight,
  birthday
) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userUpdate",
    data: {
      name,
      lastname,
      dniType,
      dni,
      address,
      neighborhood,
      phone,
      height,
      weight,
      birthday,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function userSuscribe(token, wodId) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userSuscribeWods",
    data: {
      wodId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function userUnsuscribe(token, wodId) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userUnsuscribeWods",
    data: {
      wodId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUserWods(token) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userWodsList",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
