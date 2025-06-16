import React from "react";

const ListGroup = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];

  function handleClick(event: React.MouseEvent) {
    console.log(event);
  }

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? (
        <p>No items found!</p>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item} className="list-group-item" onClick={handleClick}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
