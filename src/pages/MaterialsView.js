import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MaterialsManager from "../components/materials/MaterialsManager";
import MaterialsList from "../components/materials/MaterialsList";
import CreateNewBatch from "../components/updateProduct/CreateNewBatch";
import { getAllMaterials } from "../store/selectMaterialReducer";
import "../styles/MaterialsView.css";
import MaterialUpdate from "../components/materials/MaterialUpdate";

function MaterialsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  return (
    <div className="MaterialsView">
      <div className="MaterialsView-header">
        <h2>Materials Manager</h2>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#uploadMaterial"
            style={{marginRight: '10px'}}
          >
            Create material
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#createBatch"
            className="btn btn-outline-secondary"
          >
            Create material batch
          </button>
        </div>
      </div>
      <MaterialsList />
      <MaterialUpdate />
      <CreateNewBatch />
      <MaterialsManager />
    </div>
  );
}

export default MaterialsView;
