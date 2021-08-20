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
            <td>{stock.batch}</td>
            <td>
              {new Intl.NumberFormat().format(parseInt(stock.amountInStock))}
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <table className="table table-striped">
      <caption>Available Batches</caption>
      <thead>
        <tr>
          <th>Batch number</th>
          <th>Amount (kg)</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default ReportStockByMaterial;
