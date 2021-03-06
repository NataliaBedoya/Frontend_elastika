import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/images/logo.png";
import ActionBar from "../components/general/ActionBar";
import MaterialsManager from "../components/materials/MaterialsManager";
import MaterialsList from "../components/materials/MaterialsList";

import { getAllMaterials } from "../store/selectMaterialReducer";

import "../styles/MaterialsView.css";

function MaterialsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  return (
    <div className="MaterialsView">
      <div className="MaterialsView-blockLogoNav">
        <div className="MaterialsView-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ActionBar />
        </div>
      </div>
      <div className="MaterialsView-InfoBlock">
        <br />
        <h2>Materials Manager</h2>
        <hr />
        <div className="MaterialsView-materialmanagerblock">
          <MaterialsManager />
        </div>
        <br />
        <hr />
        <MaterialsList />
      </div>
    </div>
  );
}

export default MaterialsView;
