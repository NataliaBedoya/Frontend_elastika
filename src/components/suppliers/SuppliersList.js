import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllSupplier,
  assignSupplierToDelete,
} from "../../store/selectSupplierReducer";

function SuppliersList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSupplier());
  }, []);

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
            <td>{supplier.name}</td>
            <td>{supplier.contact1}</td>
            <td>{supplier.email1}</td>
            <td>{supplier.phone1}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>List of suppliers</caption>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default SuppliersList;
