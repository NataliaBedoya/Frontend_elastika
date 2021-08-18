import Swal from "sweetalert2";

import {
  getCustomerList,
  destroyCustomer,
  customerRegister,
  customerUpdate,
  deleteContact,
} from "./services/customerServices";

export const GET_CUSTOMER_LIST = "GET_CUSTOMER_LIST";
export const ASSIGN_CUSTOMER_TO_DELETE = "ASSIGN_CUSTOMER_TO_DELETE";
export const REMOVE_CUSTOMER_DELETED = "REMOVE_CUSTOMER_DELETED";
export const CREATE_NEW_CUSTOMER = "CREATE_NEW_CUSTOMER";
export const UPDATE_CUSTOMER_PROFILE_INFO = "UPDATE_CUSTOMER_PROFILE_INFO";

const initialState = {
  customer: {},
  customerList: {},
  customerToDelete: {},
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

export function assignCustomerToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_CUSTOMER_TO_DELETE,
      payload: id,
    });
  };
}

export function deleteCustomer(customerToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyCustomer(customerToDelete);
      dispatch({
        type: REMOVE_CUSTOMER_DELETED,
        payload: data,
      });
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
  customer,
  businessPhone,
  contact1,
  email1,
  phone1
) {
  return async function (dispatch) {
    try {
      const { data } = await customerUpdate(
        customer,
        businessPhone,
        contact1,
        email1,
        phone1
      );
      dispatch({
        type: UPDATE_CUSTOMER_PROFILE_INFO,
        payload: data,
      });
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
      const { data } = await deleteContact(customer);
      dispatch({
        type: UPDATE_CUSTOMER_PROFILE_INFO,
        payload: data,
      });
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
    case ASSIGN_CUSTOMER_TO_DELETE: {
      return {
        ...state,
        customerToDelete: action.payload,
      };
    }
    case REMOVE_CUSTOMER_DELETED: {
      return {
        ...state,
        customerList: state.customerList.filter(
          (customer) => customer._id !== action.payload._id
        ),
      };
    }

    case CREATE_NEW_CUSTOMER: {
      return {
        ...state,
        customerList: state.customerList.concat(action.payload),
      };
    }
    case UPDATE_CUSTOMER_PROFILE_INFO: {
      return {
        ...state,
        customer: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
