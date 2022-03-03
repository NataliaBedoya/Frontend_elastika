import axios from "axios";

export async function getSupplierList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/supplier/supplierList",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function destroySupplier(supplierId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/supplier/supplierDelete",
    data: { supplierId },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function supplierRegister(
  dni,
  name,
  contact1,
  email1,
  phone1,
  country,
  city
) {
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
      country,
      city,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function supplierUpdate(supplierId, contact1, email1, phone1) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/supplier/supplierUpdate",
    data: {
      supplierId,
      contact1,
      email1,
      phone1,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}
