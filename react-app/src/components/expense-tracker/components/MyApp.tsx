import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

const expenses = [
  { id: 0, description: "item1", amount: 3, category: "groceries" },
  { id: 1, description: "item2", amount: 1, category: "utilities" },
  { id: 2, description: "item3", amount: 5, category: "utilities" },
  { id: 3, description: "item4", amount: 13, category: "entertainment" },
];

const MyApp = () => {
  const [exps, setExps] = useState(expenses);
  return (
    <>
      <ExpenseFilter onSelectCategory={(val) => console.log(val)} />
      <ExpenseList
        expenses={exps}
        onDelete={(id) => setExps(exps.filter((exp) => exp.id !== id))}
      />
    </>
  );
};

export default MyApp;
