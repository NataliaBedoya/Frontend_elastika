import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paginator from "../general/Paginator";

function CommitByMaterial() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);
  const [commitToShow, setCommitToShow] = useState([]);

  const { commitByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      commitByMaterial: state.selectReportReducer.commitByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  useEffect(() => {
    let section = 0;
    const newArr = [];
    let innerArr = [];

    commitByMaterial.filter(
      (commit) => commit.material._id === materialToGetReport
    ).forEach((row, i) => {
      innerArr.push(row)
      if(i === ((section + 1)*items - 1) || i === commitByMaterial.length - 1) {
        newArr.push(innerArr);
        innerArr = [];
        section++
      }
    });
    setCommitToShow(newArr);
  }, [commitByMaterial, materialToGetReport])

  const renderTable = () => {
    return (
      !!commitToShow &&
      commitToShow.length > 0 &&
      commitToShow[page].map((commit) => {
        return (
          <tr key={commit._id}>
            <td style={{ width: "30%" }}>
              {commit.customer.name} <br />
              Order: {commit.order}
            </td>
            <td style={{ width: "20%" }}>
              {new Intl.NumberFormat().format(parseInt(commit.amount))}
            </td>
            <td style={{ width: "25%" }}>
              {new Date(commit.deliveryDate).toDateString()}
            </td>
            <td style={{ width: "25%" }}>{commit.notes}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <caption>Commited Product</caption>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Customer</th>
            <th style={{ width: "20%" }}>Amount (kg) </th>
            <th style={{ width: "25%" }}>Delivery Date</th>
            <th style={{ width: "25%" }}>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Paginator page={page} setPage={setPage} totalPages={commitToShow}/>
    </div>
  );
}

export default CommitByMaterial;
