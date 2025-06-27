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
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={
          selectedCategory === "all"
            ? exps
            : exps.filter((exp) => exp.category === selectedCategory)
        }
        onDelete={(id) => setExps(exps.filter((exp) => exp.id !== id))}
      />
    </>
  );
};

export default MyApp;
