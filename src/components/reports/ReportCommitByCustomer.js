import React from "react";
import { useSelector } from "react-redux";

function CommitByMaterial() {
  const { commitByMaterial, customerToGetReport } = useSelector((state) => {
    return {
      commitByMaterial: state.selectReportReducer.commitByMaterial,
      customerToGetReport: state.selectReportReducer.customerToGetReport,
    };
  });

  const commitToShow = commitByMaterial.filter(
    (commit) => commit.customer._id === customerToGetReport
  );

  const renderTable = () => {
    return (
      !!commitToShow &&
      commitToShow.length > 0 &&
      commitToShow.map((commit) => {
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
    </div>
  );
}

export default CommitByMaterial;
