import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

const expenses = [
  { id: 0, description: "item1", amount: 3, category: "some" },
  { id: 1, description: "item2", amount: 1, category: "some" },
  { id: 2, description: "item3", amount: 5, category: "some" },
  { id: 3, description: "item4", amount: 13, category: "some" },
];

// const onDelete = (id: number) => {
//   console.log(id);
//   setExps();
// };

const MyApp = () => {
  const [exps, setExps] = useState(expenses);
  return (
    <>
      <ExpenseList
        expenses={exps}
        onDelete={(id) => setExps(exps.filter((exp) => exp.id !== id))}
      />
    </>
  );
};

export default MyApp;
