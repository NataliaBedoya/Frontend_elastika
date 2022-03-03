import axios from "axios";

export async function getCustomerList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/customerList",
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function destroyCustomer(customerId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/customerDelete",
    data: { customerId },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function customerRegister(
  dni,
  name,
  businessPhone,
  contact1,
  email1,
  phone1,
  contact2,
  email2,
  phone2
) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/create",
    data: {
      dni,
      name,
      businessPhone,
      contact1,
      email1,
      phone1,
      contact2,
      email2,
      phone2,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function customerUpdate(
  customerId,
  businessPhone,
  contact1,
  email1,
  phone1
) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/customerUpdate",
    data: {
      customerId,
      businessPhone,
      contact1,
      email1,
      phone1,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}

export async function deleteContact(customerId) {
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/deleteContact",
    data: {
      customerId,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}
