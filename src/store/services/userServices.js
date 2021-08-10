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

export async function destroyUser(userId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/userDelete",
    data: { userId },
  });
}

export async function userRegister(name, lastname, email, role, password) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/user/create",
    data: {
      name,
      lastname,
      email,
      role,
      password,
    },
  });
}
