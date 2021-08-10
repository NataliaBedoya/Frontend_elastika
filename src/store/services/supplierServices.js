import axios from "axios";

export async function getSupplierList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/supplier/supplierList",
  });
}

export async function destroySupplier(supplierId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/supplier/supplierDelete",
    data: { supplierId },
  });
}

export async function supplierRegister(dni, name, contact1, email1, phone1) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/supplier/create",
    data: {
      dni,
      name,
      contact1,
      email1,
      phone1,
    },
  });
}
