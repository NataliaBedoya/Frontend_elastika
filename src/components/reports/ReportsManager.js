import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCustomer } from "../../store/selectCustomerReducer";
import { getAllMaterials } from "../../store/selectMaterialReducer";
import {
  AssignMaterialToGetReport,
  getStock,
  getCommit,
} from "../../store/selectReportReducer";
import ReportStockByMaterial from "./ReportStockByMaterial";
import ReportCommitByMaterial from "./ReportCommitByMaterial";

function MaterialsManager() {
  const dispatch = useDispatch();
  const [report, setReport] = useState("");
  const [customer, setCustomer] = useState("");
  const [material, setMaterial] = useState("");

  useEffect(() => {
    dispatch(getAllCustomer());
    dispatch(getAllMaterials());
    dispatch(getStock());
    dispatch(getCommit());
  }, []);

  const { customerList, materialList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const callReport = () => {
    if (report === "MaterialCommittedByCustomer") {
      console.log(customer.name);
    } else {
      dispatch(AssignMaterialToGetReport(material));
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
    } else if (report === "InformationByMaterial") {
      return (
        <div>
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
          </div>
          <br />
          <div>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={callReport}
            >
              Generate Report
            </button>
          </div>
          <hr />
          <h4>Material in stock</h4>
          <ReportStockByMaterial />
          <hr />
          <h4>Commited material</h4>
          <ReportCommitByMaterial />
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
