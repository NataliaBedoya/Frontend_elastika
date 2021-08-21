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
            <th>
              <input
                type="radio"
                id={supplier._id}
                name="supplierToDelete"
                value={supplier._id}
                onChange={(e) => handleDelete(e.target.value)}
              />
            </th>
            <td>
              {supplier.name} <br />
              📍 {supplier.city}, {supplier.country}
            </td>
            <td>{supplier.contact1}</td>
            <td>
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
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>List of suppliers</caption>
        <thead>
          <tr>
            <th>Select</th>
            <th>Supplier Name</th>
            <th>Contact Name</th>
            <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default SuppliersList;
