import Swal from "sweetalert2";

import {
  getSupplierList,
  destroySupplier,
  supplierRegister,
  supplierUpdate,
} from "./services/supplierServices";

export const GET_SUPPLIER_LIST = "GET_SUPPLIER_LIST";
export const ASSIGN_SUPPLIER_TO_UPDATE = "ASSIGN_SUPPLIER_TO_UPDATE";
export const REMOVE_SUPPLIER_DELETED = "REMOVE_SUPPLIER_DELETED";
export const CREATE_NEW_SUPPLIER = "CREATE_NEW_SUPPLIER";
export const UPDATE_SUPPLIER_PROFILE_INFO = "UPDATE_SUPPLIER_PROFILE_INFO";

const initialState = {
  supplierList: [],
  supplierToUpdate: {
    contact1: '',
    email1: '',
    phone1: ''
  },
  supplier: {},
};

export function getAllSupplier() {
  return async function (dispatch) {
    try {
      const { data } = await getSupplierList();
      dispatch({
        type: GET_SUPPLIER_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignSupplierToUpdate(supplier) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_SUPPLIER_TO_UPDATE,
      payload: supplier,
    });
  };
}

export function deleteSupplier(supplierToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroySupplier(supplierToDelete);
      dispatch({
        type: REMOVE_SUPPLIER_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Supplier has successfully deleted!`,
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

export function createNewSupplier(
  dni,
  name,
  contact1,
  email1,
  phone1,
  country,
  city
) {
  return async function (dispatch) {
    try {
      const { data } = await supplierRegister(
        dni,
        name,
        contact1,
        email1,
        phone1,
        country,
        city
      );
      dispatch({
        type: CREATE_NEW_SUPPLIER,
        payload: data,
      });
      const modalUploadSupplier = document.getElementById('uploadSupplier');
      window.bootstrap.Modal.getInstance(modalUploadSupplier).hide();
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Supplier ${name} has successfully registered!`,
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

export function updateSupplierProfileInfo(supplier, contact1, email1, phone1) {
  return async function (dispatch) {
    try {
      await supplierUpdate(supplier, contact1, email1, phone1);
      dispatch(getAllSupplier());
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Supplier information has been updated successfully!`,
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
    case GET_SUPPLIER_LIST: {
      return {
        ...state,
        supplierList: action.payload,
      };
    }
    case ASSIGN_SUPPLIER_TO_UPDATE: {
      return {
        ...state,
        supplierToUpdate: action.payload,
      };
    }
    case REMOVE_SUPPLIER_DELETED: {
      return {
        ...state,
        supplierList: state.supplierList.filter(
          (supplier) => supplier._id !== action.payload._id
        ),
      };
    }

    case CREATE_NEW_SUPPLIER: {
      return {
        ...state,
        supplierList: state.supplierList.concat(action.payload),
      };
    }

    case UPDATE_SUPPLIER_PROFILE_INFO: {
      return {
        ...state,
        supplier: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
