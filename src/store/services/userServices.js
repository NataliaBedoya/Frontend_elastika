import axios from "axios";

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

export async function getUserList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userList",
  });
}

export async function userRegister(name, lastname, email, role, password) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/signup",
    data: {
      name,
      lastname,
      email,
      role,
      password,
    },
  });
}

export async function userUpdate(token, name, lastname, role, email, userId) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userUpdate",
    data: {
      name,
      lastname,
      role,
      email,
      userId
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function destroyUser(userId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userDelete",
    data: { userId },
  });
}
