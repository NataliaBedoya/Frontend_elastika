import React from "react";
import { useSelector } from "react-redux";

function ReportStockByMaterial() {
  const { stockByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      stockByMaterial: state.selectReportReducer.stockByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  const stockToShow = stockByMaterial.filter(
    (stock) => stock.material === materialToGetReport
  );

  const renderTable = () => {
    return (
      !!stockToShow &&
      stockToShow.length > 0 &&
      stockToShow.map((stock) => {
        return (
          <tr>
            <td style={{ width: "50%", textAlign: "center" }}>{stock.batch}</td>
            <td style={{ width: "50%", textAlign: "center" }}>
              {new Intl.NumberFormat().format(parseInt(stock.amountInStock))}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <caption>Available Batches</caption>
        <thead>
          <tr>
            <th style={{ width: "50%", textAlign: "center" }}>Batch ID</th>
            <th style={{ width: "50%", textAlign: "center" }}>
              Amount Available (kg)
            </th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default ReportStockByMaterial;
