import React from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

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

      <Buttons
        handleClick={() => {
          console.log("clicked");
        }}
      >
        myBtn
      </Buttons>
    </>
  );
};

export default App;
