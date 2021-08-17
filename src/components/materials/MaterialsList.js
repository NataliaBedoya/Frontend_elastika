import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllMaterials,
  assignMaterialToDelete,
} from "../../store/selectMaterialReducer";

function MaterialsList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMaterials());
  }, []);

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignMaterialToDelete(id));
  };

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
            <th>
              <input
                type="radio"
                id={material._id}
                name="materialToDelete"
                value={material._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
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
      <caption>List of materials</caption>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Description</th>
          <th>Threshold (kg)</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default MaterialsList;
