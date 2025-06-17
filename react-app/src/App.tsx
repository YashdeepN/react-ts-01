import React from "react";
import ListGroup from "./components/ListGroup";

const App = () => {
  const items = ["London", "New Delhi", "Tokyo", "Mumbai"];
  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
};

export default App;
