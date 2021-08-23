import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { assignMaterialToDelete } from "../../store/selectMaterialReducer";

function MaterialsList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

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
            <th style={{ width: "5%", textAlign: "center" }}>
              <input
                type="radio"
                id={material._id}
                name="materialToDelete"
                value={material._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td style={{ width: "35%", textAlign: "center" }}>
              {material.name}
            </td>
            <td style={{ width: "35%", textAlign: "center" }}>
              {material.description}
            </td>

            <td style={{ width: "25%", textAlign: "center" }}>
              {new Intl.NumberFormat().format(parseInt(material.threshold))}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>List of materials</caption>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>Select</th>
            <th style={{ width: "35%", textAlign: "center" }}>Name</th>
            <th style={{ width: "35%", textAlign: "center" }}>Description</th>
            <th style={{ width: "25%", textAlign: "center" }}>
              Threshold (kg)
            </th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default MaterialsList;
