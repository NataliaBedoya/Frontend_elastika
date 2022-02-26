import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Options from "../../assets/images/menu.png";
import { assignSupplierToUpdate, deleteSupplier } from "../../store/selectSupplierReducer";

function SuppliersList() {
  const dispatch = useDispatch();

  const handleUpdate = (supplier) => {
    dispatch(assignSupplierToUpdate(supplier));
  };

  const handleDelete = (supplierToDelete) => {
    dispatch(deleteSupplier(supplierToDelete));
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
                    onClick={() => handleUpdate(supplier)}
                    href="#"
                  >
                    Update
                  </a></li>
                  <li><a
                    className="dropdown-item"
                    onClick={() => handleDelete(supplier._id)}
                    href="#"
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
    </div>
  );
}

export default SuppliersList;

/* <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleCreate}
          >
            Create New Supplier
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#supplierUpdateModal"
            className="btn btn-outline-secondary"
            style={{ marginLeft: 10 }}
          >
            Update Supplier
          </button>
        </div>
        <hr />
        <h6>
          To delete a supplier, select it in the table and then click the button
        </h6>
        <div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDelete}
          >
            Delete Supplier
          </button>
        </div> */