import React from "react";
import ExpenseList from "./ExpenseList";

const expenses = [
  { id: 0, description: "item1", amount: 3, category: "some" },
  { id: 1, description: "item2", amount: 1, category: "some" },
  { id: 2, description: "item3", amount: 5, category: "some" },
  { id: 3, description: "item4", amount: 13, category: "some" },
];

const onDelete = (id: number) => {
  console.log(id);
};

const MyApp = () => {
  return (
    <>
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </>
  );
};

export default MyApp;
