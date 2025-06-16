import React from "react";

const ListGroup = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item"> {item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
