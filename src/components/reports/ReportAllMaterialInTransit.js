import React, { useState } from "react";
import { useSelector } from "react-redux";
import Paginator from "../general/Paginator";

function ReportAllMaterialInTransit() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);

  const { transitByMaterial } = useSelector((state) => {
    const arr = state.selectReportReducer.transitByMaterial;
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
      transitByMaterial: newArr,
    };
  });

  const renderTable = () => {
    return (
      !!transitByMaterial &&
      transitByMaterial.length > 0 &&
      transitByMaterial[page].map((transit) => {
        return (
          <tr key={transit._id}>
            <td style={{ width: "25%" }}>
              {transit.supplier.name} <br />
              Order: {transit.order}
            </td>
            <td style={{ width: "15%" }}>
              {new Intl.NumberFormat().format(parseInt(transit.amount))}
            </td>
            <td style={{ width: "30%" }}>
              &#8226; Order: {new Date(transit.orderDate).toDateString()}
              <br />
              &#8226; Shipment: {new Date(transit.shipmentDate).toDateString()}
              <br />
              &#8226; Arrival: {new Date(transit.arrivalDate).toDateString()}
              <br />
              &#8226; Release: {new Date(transit.releaseDate).toDateString()}
            </td>
            <td style={{ width: "30%" }}>
              {transit.transactionType} <hr />
              {transit.notes}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <caption>Product In Transit</caption>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Supplier</th>
            <th style={{ width: "10%" }}>Amount (kg)</th>
            <th style={{ width: "30%" }}>Timing</th>
            <th style={{ width: "30%" }}>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Paginator page={page} setPage={setPage} totalPages={transitByMaterial}/>
    </div>
  );
}

export default ReportAllMaterialInTransit;
