import axios from "axios";

export async function getStockByMaterial(token, materialId) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/stock/stockList",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getCommitByMaterial(token, commitId) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/commit/commitList",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
