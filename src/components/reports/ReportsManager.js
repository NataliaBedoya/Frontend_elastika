import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCustomer } from "../../store/selectCustomerReducer";
import { getAllMaterials } from "../../store/selectMaterialReducer";

import {
  AssignCustomerToGetReport,
  AssignMaterialToGetReport,
  getStock,
  getCommit,
  getTransit,
} from "../../store/selectReportReducer";
import ReportStockByMaterial from "./ReportStockByMaterial";
import ReportCommitByMaterial from "./ReportCommitByMaterial";
import ReportTransitbyMaterial from "./ReportTransitbyMaterial";
import ReportAllMaterialInTransit from "./ReportAllMaterialInTransit";
import ReportCommitByCustomer from "./ReportCommitByCustomer";
import ReportCommitByReference from "./ReportCommitByReference";

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
    dispatch(getTransit());
  }, []);

  const { customerList, materialList } = useSelector((state) => {
    return {
      customerList: state.selectCustomerReducer.customerList,
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const callReport = () => {
    if (report === "MaterialCommittedByCustomer") {
      dispatch(AssignCustomerToGetReport(customer));
    } else if (
      report === "InformationByMaterial" ||
      report === "MaterialCommittedByReference"
    ) {
      dispatch(AssignMaterialToGetReport(material));
    }
  };

  const ShowComponent = () => {
    if (report === "MaterialCommittedByCustomer") {
      return (
        <div>
          <div className="input-group">
            <select
              className="form-select"
              id="customer"
              aria-label="Example select with button addon"
              onChange={(e) => setCustomer(e.target.value)}
              value={customer}
            >
              <option value=""> Choose a customer</option>
              {!!customerList &&
                customerList.length > 0 &&
                customerList.map((customer) => (
                  <option value={customer._id} key={customer._id} >{customer.name}</option>
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
          <h4>Material Commited</h4>
          <ReportCommitByCustomer />
        </div>
      );
    } else if (report === "InformationByMaterial") {
      return (
        <div>
          <div className="input-group">
            <select
              className="form-select"
              id="material"
              aria-label="Example select with button addon"
              onChange={(e) => setMaterial(e.target.value)}
              value={material}
            >
              <option value=""> Choose a material</option>
              {!!materialList &&
                materialList.length > 0 &&
                materialList.map((material) => (
                  <option value={material._id} key={material._id}>{material.name}</option>
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
          <h4>Material in Stock</h4>
          <ReportStockByMaterial />
          <hr />
          <h4>Commited Material</h4>
          <ReportCommitByMaterial />
          <hr />
          <h4>Material in Transit</h4>
          <ReportTransitbyMaterial />
        </div>
      );
    } else if (report === "MaterialInTransit") {
      return (
        <div>
          <h4>Material in Transit</h4>
          <ReportAllMaterialInTransit />
          <hr />
        </div>
      );
    } else if (report === "MaterialCommittedByReference") {
      return (
        <div>
          <div className="input-group">
            <select
              className="form-select"
              id="material"
              aria-label="Example select with button addon"
              onChange={(e) => setMaterial(e.target.value)}
              value={material}
            >
              <option value=""> Choose a material</option>
              {!!materialList &&
                materialList.length > 0 &&
                materialList.map((material) => (
                  <option value={material._id} key={material._id}>{material.name}</option>
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
          <h4>Material in Stock</h4>
          <ReportCommitByReference />
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <h6>Choose the report you want to see and then select the option</h6>
        <div className="input-group">
          <select
            className="form-select"
            id="report"
            aria-label="Example select with button addon"
            onChange={(e) => setReport(e.target.value)}
            value={report}
          >
            <option value="">Choose a report</option>
            <option value={"InformationByMaterial"}>
              Information by material
            </option>
            <option value={"MaterialInTransit"}>Material in transit</option>
            <option value={"MaterialCommittedByReference"}>
              Material commited by reference
            </option>
            <option value={"MaterialCommittedByCustomer"}>
              Material commited by customer
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
