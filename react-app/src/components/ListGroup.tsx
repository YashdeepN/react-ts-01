import React, { useState } from "react";

const ListGroup = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];

  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? (
        <p>No items found!</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selected === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setSelected(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
