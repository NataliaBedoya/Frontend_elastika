import React from "react";
import { useSelector } from "react-redux";

function ReportTransitByMaterial() {
  const { transitByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      transitByMaterial: state.selectReportReducer.transitByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  const transitToShow = transitByMaterial.filter(
    (transit) => transit.material === materialToGetReport
  );

  const renderTable = () => {
    return (
      !!transitToShow &&
      transitToShow.length > 0 &&
      transitToShow.map((transit) => {
        return (
          <tr>
            <td>
              {transit.supplier.name} <br />
              Order: {transit.order}
            </td>
            <td>{new Intl.NumberFormat().format(parseInt(transit.amount))}</td>
            <td>
              Order: {new Date(transit.orderDate).toDateString()}
              <br />
              Shipment: {new Date(transit.shipmentDate).toDateString()}
              <br />
              Arrival: {new Date(transit.arrivalDate).toDateString()}
              <br />
              Release: {new Date(transit.releaseDate).toDateString()}
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

export default ReportTransitByMaterial;
