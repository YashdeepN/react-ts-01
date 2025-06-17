import React from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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

      <Alert text="Kya kya re?" />
    </>
  );
};

export default App;
