import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Options from "../../assets/images/menu.png";
import { assignSupplierToUpdate, deleteSupplier } from "../../store/selectSupplierReducer";
import Paginator from "../general/Paginator";

function SuppliersList() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);

  const dispatch = useDispatch();

  const handleUpdate = (supplier) => {
    dispatch(assignSupplierToUpdate(supplier));
  };

  const handleDelete = (supplierToDelete) => {
    dispatch(deleteSupplier(supplierToDelete));
  };

  const { supplierList } = useSelector((state) => {
    const arr = state.selectSupplierReducer.supplierList;
    let section = 0;
    const newArr = [];
    let innerArr = [];

    arr.forEach((row, i) => {
      innerArr.push(row)
      if(i === ((section + 1)*items - 1) || i === arr.length - 1) {
        newArr.push(innerArr);
        innerArr = [];
        section++
      }
    })
    return {
      supplierList: newArr,
    };
  });

  const renderTable = () => {
    return (
      !!supplierList &&
      supplierList.length > 0 &&
      supplierList[page].map((supplier) => {
        return (
          <tr key={supplier._id}>
            <td style={{ width: "10%", textAlign: 'center' }}>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img width="15px" alt="options" src={Options} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#supplierUpdateModal"
                    href="#supplierUdateModal"
                    onClick={() => handleUpdate(supplier)}
                  >
                    Update
                  </a></li>
                  <li><a
                    className="dropdown-item"
                    href="#delete"
                    onClick={() => handleDelete(supplier._id)}
                  >
                    Delete
                  </a></li>
                </ul>
              </div>
            </td>
            <td
              style={{
                width: "30%",
                textAlign: "left",
                overflowWrap: "break-word",
              }}
            >
              {supplier.name} <br />
              📍 {supplier.city}, {supplier.country}
            </td>
            <td style={{ width: "30%", textAlign: "left" }}>
              {supplier.contact1}
            </td>
            <td style={{ width: "30%", textAlign: "left" }}>
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
    <div style={{ width: "90%" }} className="table-responsive">
      <table className="table table-striped">
        <caption>List of suppliers</caption>
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: "center" }}>Select</th>
            <th style={{ width: "30%", textAlign: "left" }}>Supplier Name</th>
            <th style={{ width: "30%", textAlign: "left" }}>Contact Name</th>
            <th style={{ width: "30%", textAlign: "left" }}>Contact Info</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Paginator page={page} setPage={setPage} totalPages={supplierList}/>
    </div>
  );
}

export default SuppliersList;