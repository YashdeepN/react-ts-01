import React from "react";

const ExpenseFilter = () => {
  return (
    <>
      <select className="form-select">
        <option value="">All Categories</option>
        <option value="">Groceries</option>
        <option value="">Utilities</option>
        <option value="">Entertainment</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
