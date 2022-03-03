import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Options from "../../assets/images/menu.png";
import { assignMaterialToUpdate, deleteMaterial } from "../../store/selectMaterialReducer";

function MaterialsList() {
  const dispatch = useDispatch();

  const handleUpdate = (material) => {
    dispatch(assignMaterialToUpdate(material));
  };

  const handleDelete = (id) => {
    dispatch(deleteMaterial(id));
  };

  const handleBatches = (stock) => {
    const batches = []
    stock.forEach(({batch}) => {
      batches.push(` ${batch}`)
    });
    return batches.length ? batches.toString() : 'none';
  }

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
          <tr key={material._id}>
            <th style={{ width: "10%", textAlign: 'center' }}>
              <div className="dropdown">
                <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img width="15px" alt="options" src={Options} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#materialUpdateModal"
                    href="#materialUpdateModal"
                    onClick={() => handleUpdate(material)}
                  >
                    Update threshold
                  </a></li>
                  <li><a
                    className="dropdown-item"
                    href="#delete"
                    onClick={() => handleDelete(material._id)}
                  >
                    Delete
                  </a></li>
                </ul>
              </div>
            </th>
            <td style={{ width: "30%", textAlign: "center" }}>
              {material.name}
            </td>
            <td style={{ width: "30%", textAlign: "center" }}>
              {material.description}
            </td>
            <td style={{ width: "20%", textAlign: "center" }}>
              <div className="my-tooltip-container">
                <div className="my-tooltip">
                  {handleBatches(material.stock)}
                </div>
                {material.stock.length}
              </div>
            </td>
            <td style={{ width: "20%", textAlign: "center" }}>
              {new Intl.NumberFormat().format(parseInt(material.threshold))}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div style={{ width: "90%", overflow: "visible" }} className="table-responsive">
      <table className="table table-striped">
        <caption>List of materials</caption>
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: 'center' }}>Select</th>
            <th style={{ width: "30%", textAlign: "center" }}>Name</th>
            <th style={{ width: "30%", textAlign: "center" }}>Description</th>
            <th style={{ width: "20%", textAlign: "center" }}>Batches</th>
            <th style={{ width: "20%", textAlign: "center" }}>
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
