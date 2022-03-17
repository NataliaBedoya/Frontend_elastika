import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paginator from "../general/Paginator";

function ReportTransitByMaterial() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);
  const [transitToShow, setTransitToShow] = useState([]);

  const { transitByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      transitByMaterial: state.selectReportReducer.transitByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  useEffect(() => {
    let section = 0;
    const newArr = [];
    let innerArr = [];

    transitByMaterial.filter(
      (transit) => transit.material._id === materialToGetReport
    ).forEach((row, i) => {
      innerArr.push(row)
      if(i === ((section + 1)*items - 1) || i === transitByMaterial.length - 1) {
        newArr.push(innerArr);
        innerArr = [];
        section++
      }
    });
    setTransitToShow(newArr);
  }, [transitByMaterial, materialToGetReport])

  const renderTable = () => {
    return (
      !!transitToShow &&
      transitToShow.length > 0 &&
      transitToShow[page].map((transit) => {
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
            <th style={{ width: "15%" }}>Amount (kg)</th>
            <th style={{ width: "30%" }}>Timing</th>
            <th style={{ width: "30%" }}>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Paginator page={page} setPage={setPage} totalPages={transitToShow}/>
    </div>
  );
}

export default ReportTransitByMaterial;
