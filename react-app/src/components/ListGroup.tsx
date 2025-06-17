import React, { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
              onClick={() => {
                setSelected(index);
                onSelectItem(item);
              }}
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
