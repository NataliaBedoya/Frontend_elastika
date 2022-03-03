import React from "react";
import { useSelector } from "react-redux";

function CommitByMaterial() {
  const { commitByMaterial, materialToGetReport } = useSelector((state) => {
    return {
      commitByMaterial: state.selectReportReducer.commitByMaterial,
      materialToGetReport: state.selectReportReducer.materialToGetReport,
    };
  });

  console.log(commitByMaterial);

  const commitToShow = commitByMaterial.filter(
    (commit) => commit.material._id === materialToGetReport
  );

  const renderTable = () => {
    return (
      !!commitToShow &&
      commitToShow.length > 0 &&
      commitToShow.map((commit) => {
        return (
          <tr key={commit._id}>
            <td style={{ width: "25%" }}>
              {commit.customer.name} <br />
              Order: {commit.order}
            </td>
            <td style={{ width: "25%" }}>
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
            <th style={{ width: "25%" }}>Customer</th>
            <th style={{ width: "25%" }}>Amount (kg) </th>
            <th style={{ width: "25%" }}>Delivery Date</th>
            <th style={{ width: "25%" }}>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default CommitByMaterial;
