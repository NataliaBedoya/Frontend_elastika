import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMaterials,
  updateMaterialInfo,
} from "../../store/selectMaterialReducer";

function MaterialUpdate() {
  const dispatch = useDispatch();
  const [material, setMaterial] = useState("");
  const [threshold, setThreshold] = useState("");

  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  const { materialList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const handleUpdate = () => {
    dispatch(updateMaterialInfo(material, threshold));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div
        className="modal fade"
        id="materialUpdateModal"
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
                Material threshold update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Select the material you want to update.</h6>

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
              <hr />
              <label htmlFor="threshold">
                <strong> Threshold: </strong>
              </label>
              <input
                id="threshold"
                type="text"
                name="threshold"
                className="form-control"
                onChange={(e) => setThreshold(e.target.value)}
                value={threshold}
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-outline-secondary">
                Update
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

export default MaterialUpdate;
