import React from "react";
import { useSelector } from "react-redux";

function CommitByMaterial() {
  const { commitByMaterial, materialToGetReport, customerList } = useSelector(
    (state) => {
      return {
        commitByMaterial: state.selectReportReducer.commitByMaterial,
        materialToGetReport: state.selectReportReducer.materialToGetReport,
        customerList: state.selectCustomerReducer.customerList,
      };
    }
  );

  const commitToShow = commitByMaterial.filter(
    (commit) => commit.material === materialToGetReport
  );

  const customer = customerList.filter(
    (customer) => customer._id === commitByMaterial.customer
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
