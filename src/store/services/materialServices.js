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
  console.log("batch creation");
  console.log(materialId, batch);
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/stock/create",
    data: { materialId, batch },
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
}

export async function destroyBatch(batchId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/stock/stockDelete",
    data: { batchId },
  });
}

export async function amountUpdate(batchId, amountInStock) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/stock/stockUpdate",
    data: { batchId, amountInStock },
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

export async function commitMaterial(
  token,
  materialId,
  amount,
  customerId,
  order,
  notes,
  assignmentDate,
  deliveryDate
) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/commit/create",
    data: {
      materialId,
      amount,
      customerId,
      order,
      notes,
      assignmentDate,
      deliveryDate,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function destroyCommit(commitId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/commit/commitDelete",
    data: { commitId },
  });
}

export async function transitRegister(
  token,
  order,
  orderDate,
  supplierId,
  materialId,
  amount,
  transactionType,
  shipmentDate,
  arrivalDate,
  releaseDate,
  notes
) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/transit/create",
    data: {
      order,
      orderDate,
      supplierId,
      materialId,
      amount,
      transactionType,
      shipmentDate,
      arrivalDate,
      releaseDate,
      notes,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
