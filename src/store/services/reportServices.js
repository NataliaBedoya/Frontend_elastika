import axios from "axios";

export async function getStockByMaterial() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/stock/stockList",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

export async function getCommitByMaterial() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/commit/commitList",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

export async function getTransitByMaterial() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/transit/transitList",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
