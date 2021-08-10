import Swal from "sweetalert2";

import {
  getSupplierList,
  destroySupplier,
  supplierRegister,
} from "./services/supplierServices";

export const GET_SUPPLIER_LIST = "GET_SUPPLIER_LIST";
export const ASSIGN_SUPPLIER_TO_DELETE = "ASSIGN_SUPPLIER_TO_DELETE";
export const REMOVE_SUPPLIER_DELETED = "REMOVE_SUPPLIER_DELETED";
export const CREATE_NEW_SUPPLIER = "CREATE_NEW_SUPPLIER";

const initialState = {
  supplierList: {},
  supplierToDelete: {},
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

export function assignSupplierToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_SUPPLIER_TO_DELETE,
      payload: id,
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

export function createNewSupplier(dni, name, contact1, email1, phone1) {
  return async function (dispatch) {
    try {
      const { data } = await supplierRegister(
        dni,
        name,
        contact1,
        email1,
        phone1
      );
      dispatch({
        type: CREATE_NEW_SUPPLIER,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User ${name} has successfully registered!`,
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

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUPPLIER_LIST: {
      return {
        ...state,
        supplierList: action.payload,
      };
    }
    case ASSIGN_SUPPLIER_TO_DELETE: {
      return {
        ...state,
        supplierToDelete: action.payload,
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

    default: {
      return state;
    }
  }
}

export default reducer;
