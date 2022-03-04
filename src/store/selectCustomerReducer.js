import Swal from "sweetalert2";

import {
  getCustomerList,
  destroyCustomer,
  customerRegister,
  customerUpdate,
  deleteContact,
} from "./services/customerServices";

export const GET_CUSTOMER_LIST = "GET_CUSTOMER_LIST";
export const ASSIGN_CUSTOMER_TO_UPDATE = "ASSIGN_CUSTOMER_TO_UPDATE";
export const CREATE_NEW_CUSTOMER = "CREATE_NEW_CUSTOMER";

const initialState = {
  customer: {},
  customerList: [],
  customerToUpdate: {
    businessPhone: '',
    contact1: '',
    email1: '',
    phone1: ''
  },
};

export function getAllCustomer() {
  return async function (dispatch) {
    try {
      const { data } = await getCustomerList();
      dispatch({
        type: GET_CUSTOMER_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignCustomerToUpdate(customer) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_CUSTOMER_TO_UPDATE,
      payload: customer,
    });
  };
}

export function deleteCustomer(customerToDelete) {
  return async function (dispatch) {
    try {
      await destroyCustomer(customerToDelete);
      dispatch(getAllCustomer());
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Customer has successfully deleted!`,
        button: "OK",
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong`,
        button: "OK",
      });
    }
  };
}

export function createNewCustomer(
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
  return async function (dispatch) {
    try {
      const { data } = await customerRegister(
        dni,
        name,
        businessPhone,
        contact1,
        email1,
        phone1,
        contact2,
        email2,
        phone2
      );
      dispatch({
        type: CREATE_NEW_CUSTOMER,
        payload: data,
      });
      const modalUploadCostumer = document.getElementById('uploadCostumer');
      window.bootstrap.Modal.getInstance(modalUploadCostumer).hide();
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Customer ${name} has successfully registered!`,
        button: "OK",
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong`,
        button: "OK",
      });
    }
  };
}

export function updateCustomerProfileInfo(
  customerId,
  businessPhone,
  contact1,
  email1,
  phone1
) {
  return async function (dispatch) {
    try {
      await customerUpdate(
        customerId,
        businessPhone,
        contact1,
        email1,
        phone1
      );
      dispatch(getAllCustomer());
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Customer information has been updated successfully!`,
        button: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Something went wrong",
        button: "OK",
      });
      console.log(error.message);
    }
  };
}

export function deleteAdditionalContact(customer) {
  return async function (dispatch) {
    try {
      await deleteContact(customer);
      dispatch(getAllCustomer());
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Customer information has been updated successfully!`,
        button: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Something went wrong",
        button: "OK",
      });
      console.log(error.message);
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_LIST: {
      return {
        ...state,
        customerList: action.payload,
      };
    }
    case ASSIGN_CUSTOMER_TO_UPDATE: {
      return {
        ...state,
        customerToUpdate: action.payload,
      };
    }
    case CREATE_NEW_CUSTOMER: {
      return {
        ...state,
        customerList: state.customerList.concat(action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
