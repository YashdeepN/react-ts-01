import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];

  function handleSelectItem(item: string) {
    console.log(item);
  }
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
};

export default App;
