import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paginator from "../general/Paginator";

function CommitByMaterial() {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(8);
  const [commitToShow, setCommitToShow] = useState([]);

  const { commitByMaterial, customerToGetReport } = useSelector((state) => {
    return {
      commitByMaterial: state.selectReportReducer.commitByMaterial,
      customerToGetReport: state.selectReportReducer.customerToGetReport,
    };
  });

  useEffect(() => {
    let section = 0;
    const newArr = [];
    let innerArr = [];

    commitByMaterial.filter(
      (commit) => commit.customer._id === customerToGetReport
    ).forEach((row, i) => {
      innerArr.push(row)
      if(i === ((section + 1)*items - 1) || i === commitByMaterial.length - 1) {
        newArr.push(innerArr);
        innerArr = [];
        section++
      }
    });
    setCommitToShow(newArr);
  }, [commitByMaterial, customerToGetReport])

  const renderTable = () => {
    return (
      !!commitToShow &&
      commitToShow.length > 0 &&
      commitToShow[page].map((commit) => {
        return (
          <tr key={commit._id}>
            <td>
              {commit.material.name} <br />
              Order: {commit.order}
            </td>
            <td>{new Intl.NumberFormat().format(parseInt(commit.amount))}</td>
            <td>{new Date(commit.deliveryDate).toDateString()}</td>
            <td>{commit.notes}</td>
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
            <th>Material</th>
            <th>Amount (kg) </th>
            <th>Delivery Date</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Paginator page={page} setPage={setPage} totalPages={commitToShow}/>
    </div>
  );
}

export default CommitByMaterial;
