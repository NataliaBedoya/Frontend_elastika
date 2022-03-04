import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paginator from "../general/Paginator";

function ReportStockByMaterial() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);
  const [stockToShow, setStockToShow] = useState([]);

  const { stockByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      stockByMaterial: state.selectReportReducer.stockByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  useEffect(() => {
    let section = 0;
    const newArr = [];
    let innerArr = [];

    stockByMaterial.filter(
      (stock) => stock.material === materialToGetReport
    ).forEach((row, i) => {
      innerArr.push(row)
      if(i === ((section + 1)*items - 1) || i === stockByMaterial.length - 1) {
        newArr.push(innerArr);
        innerArr = [];
        section++
      }
    });
    setStockToShow(newArr);
  }, [stockByMaterial, materialToGetReport])

  const renderTable = () => {
    return (
      !!stockToShow &&
      stockToShow.length > 0 &&
      stockToShow[page].map((stock) => {
        return (
          <tr key={stock._id}>
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
      <Paginator page={page} setPage={setPage} totalPages={stockToShow}/>
    </div>
  );
}

export default ReportStockByMaterial;
