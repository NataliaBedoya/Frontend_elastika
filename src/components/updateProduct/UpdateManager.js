import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBatch,
  updateStockInfo,
} from "../../store/selectMaterialReducer";

import CreateNewBatch from "./CreateNewBatch";

function UpdateManager() {
  const dispatch = useDispatch();
  const [material, setMaterial] = useState("");
  const [batch, setBatch] = useState("");
  const [amountInStock, setAmountInStock] = useState("");

  const { materialList, stockByMaterial } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
      stockByMaterial: state.selectReportReducer.stockByMaterial,
    };
  });

  const batchToShow = stockByMaterial.filter(
    (batch) => batch.material === material
  );

  const handleUpdate = () => {
    if (parseInt(amountInStock) === 0) {
      dispatch(deleteBatch(batch));
    } else {
      dispatch(updateStockInfo(batch, amountInStock));
    }
  };

  return (
    <div>
      <div>
        <h6>Select the material you want to update. </h6>
        <div class="input-group">
          <select
            class="form-select"
            id="material"
            aria-label="Example select with button addon"
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option selected> Choose a material *</option>
            {!!materialList &&
              materialList.length > 0 &&
              materialList.map((material) => (
                <option value={material._id}>{material.name}</option>
              ))}
          </select>
        </div>
        <br />
        <h6>Select the material batch.</h6>
        <div class="input-group">
          <select
            class="form-select"
            id="material"
            aria-label="Example select with button addon"
            onChange={(e) => setBatch(e.target.value)}
          >
            <option selected> Choose a batch * </option>
            {!!batchToShow &&
              batchToShow.length > 0 &&
              batchToShow.map((element) => (
                <option value={element._id}>{element.batch}</option>
              ))}
          </select>
        </div>
        <br />
        <div className="input-group mb-3">
          <span className="input-group-text" id="amountInStock">
            Current Amount *
          </span>
          <input
            id="amountInStock"
            type="text"
            className="form-control"
            aria-label="amountInStock"
            aria-describedby="basic-addon1"
            onChange={(e) => setAmountInStock(e.target.value)}
            value={amountInStock}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleUpdate}
          >
            Update register
          </button>
        </div>
        <hr />
        <h6>To create a new material batch click the button. </h6>
        <div>
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
      <CreateNewBatch />
    </div>
  );
}

export default UpdateManager;
