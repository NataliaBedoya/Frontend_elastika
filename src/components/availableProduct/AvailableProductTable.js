import React, { useState } from "react";
import { useSelector } from "react-redux";
import Paginator from "../general/Paginator";

function AvailableProduct() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);

  const { materialList } = useSelector((state) => {
    const arr = state.selectMaterialReducer.materialList;
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
      materialList: newArr,
    };
  });

  const reduc = (accumulator, stock) => accumulator + stock.amountInStock;
  const renderTable = () => {
    return (
      !!materialList &&
      materialList.length > 0 &&
      materialList[page].map((material) => {
        return (
          <tr key={material._id}>
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
    <div className="table-responsive">
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
      <Paginator page={page} setPage={setPage} totalPages={materialList}/>
    </div>
  );
}

export default AvailableProduct;
