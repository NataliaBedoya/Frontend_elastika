import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewMaterial,
} from "../../store/selectMaterialReducer";

function MaterialsManager() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [threshold, setThreshold] = useState("");

  const handleCreate = (e) => {
    dispatch(createNewMaterial(name, description, threshold));
  };

  return (
    <div
      className="modal fade"
      id="uploadMaterial"
      aria-labelledby="uploadMaterialLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="uploadMaterialLabel">Upload new material</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button onClick={handleCreate} type="button" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialsManager;
