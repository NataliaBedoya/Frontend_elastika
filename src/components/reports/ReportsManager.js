import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCustomer } from "../../store/selectCustomerReducer";
import { getAllMaterials } from "../../store/selectMaterialReducer";

function MaterialsManager() {
  const dispatch = useDispatch();
  const [report, setReport] = useState("");
  const [customer, setCustomer] = useState("");
  const [material, setMaterial] = useState("");

  useEffect(() => {
    dispatch(getAllCustomer());
    dispatch(getAllMaterials());
  }, []);

  const { customerList, materialList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const callReport = () => {
    //cambiar los console por la funcion al reducer
    console.log(report);
    if (report === "MaterialCommittedByCustomer") {
      console.log(customer.name);
    } else {
      console.log(material);
    }
  };

  const ShowComponent = () => {
    if (report === "MaterialCommittedByCustomer") {
      return (
        <div class="input-group">
          <select
            class="form-select"
            id="customer"
            aria-label="Example select with button addon"
            onChange={(e) => setCustomer(e.target.value)}
          >
            <option selected> Choose a customer</option>
            {!!customerList &&
              customerList.length > 0 &&
              customerList.map((customer) => (
                <option value={customer.name}>{customer.name}</option>
              ))}
          </select>
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={callReport}
          >
            🔍
          </button>
        </div>
      );
    } else {
      return (
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
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={callReport}
          >
            🔍
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <h6>Choose the report you want to see and then select the option</h6>
        <div class="input-group">
          <select
            class="form-select"
            id="report"
            aria-label="Example select with button addon"
            onChange={(e) => setReport(e.target.value)}
          >
            <option selected>Choose a report</option>
            <option value={"InformationByMaterial"}>
              Information by material
            </option>
            <option value={"MaterialInTransit"}>Material in transit</option>
            <option value={"MaterialCommittedByReference"}>
              Material committed by reference
            </option>
            <option value={"MaterialCommittedByCustomer"}>
              Material committed by customer
            </option>
          </select>
        </div>
        <br />
        <div>{ShowComponent()}</div>
      </div>
    </div>
  );
}

export default MaterialsManager;
