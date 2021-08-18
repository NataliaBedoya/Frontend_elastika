import axios from "axios";

export async function getCustomerList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/customerList",
  });
}

export async function destroyCustomer(customerId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/customerDelete",
    data: { customerId },
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
  });
}
