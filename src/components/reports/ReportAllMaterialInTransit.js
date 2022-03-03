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
    </div>
  );
}

export default ReportAllMaterialInTransit;
