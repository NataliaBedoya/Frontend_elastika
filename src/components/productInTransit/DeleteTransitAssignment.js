import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransit } from "../../store/selectMaterialReducer";

function DeleteTransitAssignment() {
  const dispatch = useDispatch();
  const [material, setCustomer] = useState("");
  const [order, setOrder] = useState("");
  const [orderList, setOrderList] = useState([]);

  const { materialList, transitByMaterial } = useSelector((state) => {
    return {
      transitByMaterial: state.selectReportReducer.transitByMaterial,
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  useEffect(() => {
    const transitFilter = transitByMaterial.filter(
      (transit) => transit.material._id === material
    );
    setOrderList(transitFilter);
  }, [material])

  const handleDelete = () => {
    dispatch(deleteTransit(order));
  };

  const onSave = () => {
    const modalEl = document.getElementById("deleteTransitAssignmentModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleDelete();
      }}
    >
      <div
        className="modal fade"
        id="deleteTransitAssignmentModal"
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
                Delete assignment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>Select the material</h6>

              <select
                className="form-select"
                id="material"
                aria-label="Example select with button addon"
                onChange={(e) => setCustomer(e.target.value)}
                value={material}
              >
                <option value=""> Choose a material * </option>
                {!!materialList &&
                  materialList.length > 0 &&
                  materialList.map((material) => (
                    <option key={material._id} value={material._id}>{material.name}</option>
                  ))}
              </select>
              <hr />
              <h6>Select the order number *</h6>

              <select
                className="form-select"
                id="transit-order"
                aria-label="Example select with button addon"
                onChange={(e) => setOrder(e.target.value)}
                value={order}
              >
                <option value=""> Choose an order * </option>
                {!!orderList &&
                  orderList.length > 0 &&
                  orderList.map((order) => (
                    <option key={order._id} value={order._id}>{order.order}</option>
                  ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={onSave}
              >
                Delete
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

export default DeleteTransitAssignment;
