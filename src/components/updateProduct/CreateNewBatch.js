import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  createNewBatch,
  getAllMaterials,
} from "../../store/selectMaterialReducer";

function CreateNewBatch() {
  const dispatch = useDispatch();
  const [material, setMaterial] = useState("");
  const [batch, setBatch] = useState("");

  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  const { materialList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const handleCreate = () => {
    console.log(material, batch);
    dispatch(createNewBatch(material, batch));
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
              <label htmlFor="material" style={{ color: "black" }}>
                <strong> Material * </strong>
              </label>
              <select
                class="form-select"
                id="material"
                aria-label="Example select with button addon"
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option selected> Choose a material</option>
                {!!materialList &&
                  materialList.length > 0 &&
                  materialList.map((material) => (
                    <option value={material._id}>{material.name}</option>
                  ))}
              </select>
              <br />
              <label htmlFor="batch" style={{ color: "black" }}>
                <strong> Batch * </strong>
              </label>
              <input
                id="batch"
                type="text"
                name="batch"
                className="form-control"
                onChange={(e) => setBatch(e.target.value)}
                value={batch}
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-outline-secondary">
                Create
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateNewBatch;
