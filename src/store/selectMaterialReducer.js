import Swal from "sweetalert2";

import {
  batchCreation,
  getMaterialList,
  destroyMaterial,
  materialRegister,
  thresholdUpdate,
  commitMaterial,
  destroyBatch,
  amountUpdate,
} from "./services/materialServices";

export const GET_MATERIAL_LIST = "GET_MATERIAL_LIST";
export const ASSIGN_MATERIAL_TO_DELETE = "ASSIGN_MATERIAL_TO_DELETE";
export const REMOVE_MATERIAL_DELETED = "REMOVE_MATERIAL_DELETED";
export const CREATE_NEW_MATERIAL = "CREATE_NEW_MATERIAL";
export const GET_MATERIAL_TO_UPDATE = "GET_MATERIAL_TO_UPDATE";
export const CREATE_NEW_BATCH = "CREATE_NEW_BATCH";
export const UPDATE_THRESHOLD = "UPDATE_THRESHOLD";
export const ASSIGN_MATERIAL_TO_CUSTOMER = "ASSIGN_MATERIAL_TO_CUSTOMER";
export const REMOVE_BATCH = "REMOVE_BATCH";
export const UPDATE_AMOUNT = "UPDATE_AMOUNT";

const initialState = {
  material: {},
  materialList: {},
  materialToDelete: {},
  materialToUpdate: {},
  assignedMaterial: {},
};

export function getAllMaterials() {
  return async function (dispatch) {
    try {
      const { data } = await getMaterialList();
      dispatch({
        type: GET_MATERIAL_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignMaterialToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_MATERIAL_TO_DELETE,
      payload: id,
    });
  };
}

export function deleteMaterial(materialToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyMaterial(materialToDelete);
      dispatch({
        type: REMOVE_MATERIAL_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Material has successfully deleted!`,
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

export function createNewMaterial(name, description, threshold) {
  return async function (dispatch) {
    try {
      const { data } = await materialRegister(name, description, threshold);
      dispatch({
        type: CREATE_NEW_MATERIAL,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Material ${name} has successfully registered!`,
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

export function createNewBatch(materialId, batch) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await batchCreation(
        authorizationToken,
        materialId,
        batch
      );

      dispatch({
        type: CREATE_NEW_BATCH,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `The batch ${batch} has been successfully created.`,
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

export function deleteBatch(batchId) {
  return async function (dispatch) {
    try {
      const { data } = await destroyBatch(batchId);
      dispatch({
        type: REMOVE_BATCH,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Batch has successfully deleted!`,
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

export function updateStockInfo(stockId, amountInStock) {
  return async function (dispatch) {
    try {
      const { data } = await amountUpdate(stockId, amountInStock);
      dispatch({
        type: UPDATE_AMOUNT,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Batch selected has been updated successfully!`,
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

export function updateMaterialInfo(material, threshold) {
  return async function (dispatch) {
    try {
      const { data } = await thresholdUpdate(material, threshold);
      dispatch({
        type: UPDATE_THRESHOLD,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Material information has been updated successfully!`,
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

export function assignMaterialToCustomer(
  material,
  amount,
  customer,
  order,
  notes,
  assignmentDate,
  deliveryDate
) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await commitMaterial(
        authorizationToken,
        material,
        amount,
        customer,
        order,
        notes,
        assignmentDate,
        deliveryDate
      );
      dispatch({
        type: ASSIGN_MATERIAL_TO_CUSTOMER,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `The material has been assigned to the customer with the purchase order ${order}`,
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
    case GET_MATERIAL_LIST: {
      return {
        ...state,
        materialList: action.payload,
      };
    }
    case ASSIGN_MATERIAL_TO_DELETE: {
      return {
        ...state,
        materialToDelete: action.payload,
      };
    }
    case REMOVE_MATERIAL_DELETED: {
      return {
        ...state,
        materialList: state.materialList.filter(
          (material) => material._id !== action.payload._id
        ),
      };
    }

    case REMOVE_BATCH: {
      return {
        ...state,
      };
    }

    case UPDATE_AMOUNT: {
      return {
        ...state,
      };
    }

    case CREATE_NEW_MATERIAL: {
      return {
        ...state,
        materialList: state.materialList.concat(action.payload),
      };
    }

    case GET_MATERIAL_TO_UPDATE: {
      return {
        ...state,
        materialToUpdate: action.payload,
      };
    }

    case UPDATE_THRESHOLD: {
      return {
        ...state,
        material: action.payload,
      };
    }
    case ASSIGN_MATERIAL_TO_CUSTOMER: {
      return {
        ...state,
        assignedMaterial: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
