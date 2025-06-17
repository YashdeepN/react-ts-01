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

      <Alert>
        <h1 className="danger">Children ka Children</h1>
      </Alert>
    </>
  );
};

export default App;
