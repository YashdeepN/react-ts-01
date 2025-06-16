import React from "react";

const ListGroup = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? (
        <p>No items found!</p>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
