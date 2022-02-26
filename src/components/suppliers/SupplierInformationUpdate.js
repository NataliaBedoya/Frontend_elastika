import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSupplierProfileInfo } from "../../store/selectSupplierReducer";

function SupplierInformationUpdate() {
  const supplier = useSelector(state => state.selectSupplierReducer.supplierToUpdate);

  const dispatch = useDispatch();
  const [contact1, setContact1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");

  useEffect(() => {
    setContact1(supplier.contact1);
    setEmail1(supplier.email1);
    setPhone1(supplier.phone1);
  }, [supplier]);

  const onSave = () => {
    const modalEl = document.getElementById("supplierUpdateModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };

  const handleUpdate = () => {
    dispatch(updateSupplierProfileInfo(supplier._id, contact1, email1, phone1));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div
        className="modal fade"
        id="supplierUpdateModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Supplier Information Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="contact1">
                <strong> Contact Name: </strong>
              </label>
              <input
                id="contact1"
                type="text"
                name="contact1"
                className="form-control"
                onChange={(e) => setContact1(e.target.value)}
                value={contact1}
              />
              <label htmlFor="email1">
                <strong> Contact Email: </strong>
              </label>
              <input
                id="email1"
                type="text"
                name="email1"
                className="form-control"
                onChange={(e) => setEmail1(e.target.value)}
                value={email1}
              />
              <label htmlFor="phone1">
                <strong> Contact Phone: </strong>
              </label>
              <input
                id="phone1"
                type="text"
                name="phone1"
                className="form-control"
                onChange={(e) => setPhone1(e.target.value)}
                value={phone1}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={onSave}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SupplierInformationUpdate;
