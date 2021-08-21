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
            <td>
              {transit.supplier.name} <br />
              Order: {transit.order}
            </td>
            <td>{new Intl.NumberFormat().format(parseInt(transit.amount))}</td>
            <td>
              &#8226; Order: {new Date(transit.orderDate).toDateString()}
              <br />
              &#8226; Shipment: {new Date(transit.shipmentDate).toDateString()}
              <br />
              &#8226; Arrival: {new Date(transit.arrivalDate).toDateString()}
              <br />
              &#8226; Release: {new Date(transit.releaseDate).toDateString()}
            </td>
            <td>
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
            <th>Supplier</th>
            <th>Amount (kg)</th>
            <th>Timing</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default ReportAllMaterialInTransit;
