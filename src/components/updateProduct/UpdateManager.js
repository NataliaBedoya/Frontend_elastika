import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMaterials } from "../../store/selectMaterialReducer";
import CreateNewBatch from "./CreateNewBatch";

function UpdateManager() {
  const dispatch = useDispatch();
  const [material, setMaterial] = useState("");
  const [batch, setBatch] = useState("");
  const [amountInStock, setAmountInStock] = useState("");

  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  const { materialList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const handleSelectMaterial = () => {
    console.log(material);
    // dispatch(getStockByMaterial(material));
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
            <option selected> Choose a material</option>
            {!!materialList &&
              materialList.length > 0 &&
              materialList.map((material) => (
                <option value={material._id}>{material.name}</option>
              ))}
          </select>
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={handleSelectMaterial}
          >
            🔍
          </button>
        </div>
        <br />
        <h6>Select the material batch.</h6>
        <div class="input-group">
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
                <option value={material.name}>{material.name}</option>
              ))}
          </select>
          <button class="btn btn-outline-secondary" type="button">
            🔍
          </button>
        </div>
        <br />
        <div className="input-group mb-3">
          <span className="input-group-text" id="amountInStock">
            Current Amount
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
            // onClick={handleUpdate}
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
