import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteMaterial,
  createNewMaterial,
} from "../../store/selectMaterialReducer";

import MaterialUpdate from "./MaterialUpdate";

function MaterialsManager() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [threshold, setThreshold] = useState("");

  const { materialToDelete } = useSelector((state) => {
    return {
      materialToDelete: state.selectMaterialReducer.materialToDelete,
    };
  });

  const handleCreate = (e) => {
    dispatch(createNewMaterial(name, description, threshold));
  };

  const handleDelete = () => {
    dispatch(deleteMaterial(materialToDelete));
  };

  return (
    <div>
      <div>
        <h6>To create a new material, fill out the following form.</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="name">
            Name *
          </span>
          <input
            autoFocus
            id="name"
            type="text"
            className="form-control"
            aria-label="name"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="description">
            Description
          </span>
          <input
            id="description"
            type="text"
            className="form-control"
            aria-label="description"
            aria-describedby="basic-addon1"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="threshold">
            Threshold (kg) *
          </span>
          <input
            id="threshold"
            type="text"
            className="form-control"
            aria-label="threshold"
            aria-describedby="basic-addon1"
            onChange={(e) => setThreshold(e.target.value)}
            value={threshold}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleCreate}
          >
            Create New Material
          </button>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#materialUpdateModal"
            className="btn btn-outline-secondary"
            style={{ marginLeft: 10 }}
          >
            Update Threshold
          </button>
        </div>
        <hr />
        <h6>
          To delete a material, select it in the table and then click the button
        </h6>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDelete}
          >
            Delete Material
          </button>
        </div>
      </div>

      <MaterialUpdate />
    </div>
  );
}

export default MaterialsManager;
