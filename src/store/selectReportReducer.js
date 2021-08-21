import Swal from "sweetalert2";

import {
  getStockByMaterial,
  getCommitByMaterial,
  getTransitByMaterial,
} from "./services/reportServices";

export const ASSIGN_MATERIAL_TO_GET_REPORT = "ASSIGN_MATERIAL_TO_GET_REPORT";
export const GET_STOCK_BY_MATERIAL = "GET_STOCK_BY_MATERIAL";
export const GET_COMMIT_BY_MATERIAL = "GET_COMMIT_BY_MATERIAL";
export const GET_TRANSIT_BY_MATERIAL = "GET_TRANSIT_BY_MATERIAL";

const initialState = {
  materialToGetReport: {},
  stockByMaterial: [],
  commitByMaterial: [],
  transitByMaterial: [],
};

export function AssignMaterialToGetReport(material) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_MATERIAL_TO_GET_REPORT,
      payload: material,
    });
  };
}

export function getStock(materialId) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await getStockByMaterial(authorizationToken, materialId);
      dispatch({ type: GET_STOCK_BY_MATERIAL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCommit(materialId) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await getCommitByMaterial(
        authorizationToken,
        materialId
      );
      dispatch({ type: GET_COMMIT_BY_MATERIAL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTransit(materialId) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await getTransitByMaterial(
        authorizationToken,
        materialId
      );
      dispatch({ type: GET_TRANSIT_BY_MATERIAL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ASSIGN_MATERIAL_TO_GET_REPORT: {
      return {
        ...state,
        materialToGetReport: action.payload,
      };
    }

    case GET_STOCK_BY_MATERIAL: {
      return {
        ...state,
        stockByMaterial: action.payload,
      };
    }

    case GET_COMMIT_BY_MATERIAL: {
      return {
        ...state,
        commitByMaterial: action.payload,
      };
    }

    case GET_TRANSIT_BY_MATERIAL: {
      return {
        ...state,
        transitByMaterial: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
