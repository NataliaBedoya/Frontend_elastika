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

export async function customerRegister(dni, name, contact1, email1, phone1) {
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/customer/create",
    data: {
      dni,
      name,
      contact1,
      email1,
      phone1,
    },
  });
}
