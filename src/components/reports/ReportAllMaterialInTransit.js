import React from "react";
import { useSelector } from "react-redux";

function ReportAllMaterialInTransit() {
  const { transitByMaterial } = useSelector((state) => {
    return {
      transitByMaterial: state.selectReportReducer.transitByMaterial,
    };
  });

  const renderTable = () => {
    return (
      !!transitByMaterial &&
      transitByMaterial.length > 0 &&
      transitByMaterial.map((transit) => {
        return (
          <tr>
            <td style={{ width: "25%", textAlign: "left" }}>
              {transit.supplier.name} <br />
              Order: {transit.order}
            </td>
            <td style={{ width: "15%", textAlign: "center" }}>
              {new Intl.NumberFormat().format(parseInt(transit.amount))}
            </td>
            <td style={{ width: "30%", textAlign: "left" }}>
              &#8226; Order: {new Date(transit.orderDate).toDateString()}
              <br />
              &#8226; Shipment: {new Date(transit.shipmentDate).toDateString()}
              <br />
              &#8226; Arrival: {new Date(transit.arrivalDate).toDateString()}
              <br />
              &#8226; Release: {new Date(transit.releaseDate).toDateString()}
            </td>
            <td style={{ width: "30%", textAlign: "left" }}>
              {transit.transactionType} <hr />
              {transit.notes}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>Product In Transit</caption>
        <thead>
          <tr>
            <th style={{ width: "25%", textAlign: "center" }}>Supplier</th>
            <th style={{ width: "10%", textAlign: "center" }}>Amount (kg)</th>
            <th style={{ width: "30%", textAlign: "center" }}>Timing</th>
            <th style={{ width: "30%", textAlign: "center" }}>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default ReportAllMaterialInTransit;
