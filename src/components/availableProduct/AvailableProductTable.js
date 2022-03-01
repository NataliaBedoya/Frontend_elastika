import React from "react";
import { useSelector } from "react-redux";

function AvailableProduct() {
  const { materialList } = useSelector((state) => {
    return {
      materialList: state.selectMaterialReducer.materialList,
    };
  });

  const reduc = (accumulator, stock) => accumulator + stock.amountInStock;
  const renderTable = () => {
    return (
      !!materialList &&
      materialList.length > 0 &&
      materialList.map((material) => {
        return (
          <tr>
            <td>{material.name}</td>
            <td>{material.description}</td>

            <td>
              {new Intl.NumberFormat().format(parseInt(material.threshold))}
            </td>
            <td>
              {new Intl.NumberFormat().format(
                parseInt(material.stock.reduce(reduc, 0))
              )}{" "}
            </td>
            <td>
              {parseInt(material.threshold) >
                parseInt(material.stock.reduce(reduc, 0))
                ? "🚨"
                : " "}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>Stock of materials</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Threshold (kg)</th>
          <th>Stock (kg)</th>

          <th></th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default AvailableProduct;
