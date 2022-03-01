import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createNewBatch } from "../../store/selectMaterialReducer";

function CreateNewBatch() {
  const dispatch = useDispatch();
  const [materialId, setMaterial] = useState("default");
  const [batch, setBatch] = useState("");

  const { materialList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const handleCreate = () => {
    dispatch(createNewBatch(materialId, batch));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div
        className="modal fade"
        id="createBatch"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Batch creation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-1">
                <span className="input-group-text" id="name">
                  Material *
                </span>
                <select
                  className="form-select"
                  id="material"
                  aria-label="Example select with button addon"
                  onChange={(e) => setMaterial(e.target.value)}
                  value={materialId}
                >
                  <option value="default"> Choose a material</option>
                  {!!materialList &&
                    materialList.length > 0 &&
                    materialList.map((material) => (
                      <option value={material._id}>{material.name}</option>
                    ))}
                </select>
              </div>
              <br />
              <div className="input-group mb-3">
                <span className="input-group-text" id="name">
                  Batch *
                </span>
                <input
                  id="batch"
                  type="text"
                  name="batch"
                  className="form-control"
                  onChange={(e) => setBatch(e.target.value)}
                  value={batch}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateNewBatch;
