import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { assignSupplierToDelete } from "../../store/selectSupplierReducer";

function SuppliersList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setIsChecked(id);
    dispatch(assignSupplierToDelete(id));
  };

  const { supplierList } = useSelector((state) => {
    return {
      supplierList: state.selectSupplierReducer.supplierList,
    };
  });

  const renderTable = () => {
    return (
      !!supplierList &&
      supplierList.length > 0 &&
      supplierList.map((supplier) => {
        return (
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>
              <input
                type="radio"
                id={supplier._id}
                name="supplierToDelete"
                value={supplier._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td
              style={{
                width: "35%",
                textAlign: "left",
                overflowWrap: "break-word",
              }}
            >
              {supplier.name} <br />
              📍 {supplier.city}, {supplier.country}
            </td>
            <td style={{ width: "30%", textAlign: "center" }}>
              {supplier.contact1}
            </td>
            <td style={{ width: "30%", textAlign: "center" }}>
              {supplier.email1}
              <br />
              {supplier.phone1}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <caption>List of suppliers</caption>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>Select</th>
            <th style={{ width: "35%", textAlign: "center" }}>Supplier Name</th>
            <th style={{ width: "30%", textAlign: "center" }}>Contact Name</th>
            <th style={{ width: "30%", textAlign: "center" }}>Contact Info</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default SuppliersList;
