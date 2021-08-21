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
            <td>{transit.order}</td>
            <td>{transit.supplier.name}</td>
            <td>{new Intl.NumberFormat().format(parseInt(transit.amount))}</td>
            <td>{new Date(transit.release).toDateString()}</td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>Product In Transit</caption>
      <thead>
        <tr>
          <th>Purchase order</th>
          <th>Supplier</th>
          <th>Amount (kg)</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default ReportTransitByMaterial;
