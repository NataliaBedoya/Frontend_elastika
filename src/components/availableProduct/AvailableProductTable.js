import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllMaterials } from "../../store/selectMaterialReducer";

function AvailableProduct() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  const { materialList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const renderTable = () => {
    return (
      !!materialList &&
      materialList.length > 0 &&
      materialList.map((material) => {
        return (
          <tr>
            <td>{material.name}</td>
            <td>{material.description}</td>
            <td>{material.threshold}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>Stock of materials</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Threshold (kg)</th>
          <th>Stock (kg)</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default AvailableProduct;
