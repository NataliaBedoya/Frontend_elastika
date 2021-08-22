import React from "react";
import { useSelector } from "react-redux";

function CommitByMaterial() {
  const { commitByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      commitByMaterial: state.selectReportReducer.commitByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  //console.log(commitByMaterial);

  const commitToShow = commitByMaterial.filter(
    (commit) => commit.material._id === materialToGetReport
  );

  const renderTable = () => {
    return (
      !!commitToShow &&
      commitToShow.length > 0 &&
      commitToShow.map((commit) => {
        return (
          <tr>
            <td>
              {commit.customer.name} <br />
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
    <div class="table-responsive">
      <table className="table table-striped">
        <caption>Commited Product</caption>
        <thead>
          <tr>
            <th>Customer</th>
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
