import Swal from "sweetalert2";

import {
  getMaterialList,
  destroyMaterial,
  materialRegister,
} from "./services/materialServices";

export const GET_MATERIAL_LIST = "GET_MATERIAL_LIST";
export const ASSIGN_MATERIAL_TO_DELETE = "ASSIGN_MATERIAL_TO_DELETE";
export const REMOVE_MATERIAL_DELETED = "REMOVE_MATERIAL_DELETED";
export const CREATE_NEW_MATERIAL = "CREATE_NEW_MATERIAL";

const initialState = {
  materialList: {},
  materialToDelete: {},
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

export function createNewMaterial(name, description) {
  return async function (dispatch) {
    try {
      const { data } = await materialRegister(name, description);
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

    case CREATE_NEW_MATERIAL: {
      return {
        ...state,
        materialList: state.materialList.concat(action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
