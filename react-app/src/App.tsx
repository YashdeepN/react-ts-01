import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import Like from "./components/Like";

const App = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];

  const [showAlert, setShowAlert] = useState(false);

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

      {showAlert && (
        <Alert
          onClick={() => {
            setShowAlert(false);
          }}
        >
          <h1 className="danger">Children ka Children</h1>
        </Alert>
      )}

      <Buttons
        handleClick={() => {
          setShowAlert(true);
        }}
      >
        myBtn
      </Buttons>

      <Like />
    </>
  );
};

export default App;
