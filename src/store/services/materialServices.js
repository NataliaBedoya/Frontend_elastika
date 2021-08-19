import axios from "axios";

export async function getMaterialList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/material/materialList",
  });
}

export async function destroyMaterial(materialId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/material/materialDelete",
    data: { materialId },
  });
}

export async function materialRegister(name, description, threshold) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/material/create",
    data: {
      name,
      description,
      threshold,
    },
  });
}

export async function batchCreation(token, materialId, batch) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/stock/create",
    data: { materialId, batch },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function thresholdUpdate(materialId, threshold) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/material/materialUpdate",
    data: { materialId, threshold },
  });
}
