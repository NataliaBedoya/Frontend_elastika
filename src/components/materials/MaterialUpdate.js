import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMaterialInfo } from "../../store/selectMaterialReducer";

function MaterialUpdate() {
  const material = useSelector(state => state.selectMaterialReducer.materialToUpdate);

  const dispatch = useDispatch();
  const [threshold, setThreshold] = useState(material.threshold);

  useEffect(() => {
    setThreshold(material.threshold);
  }, [material])

  const onSave = () => {
    const modalEl = document.getElementById("materialUpdateModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };

  const handleUpdate = () => {
    dispatch(updateMaterialInfo(material._id, threshold));
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
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={onSave}
              >
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
