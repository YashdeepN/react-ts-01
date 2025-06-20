import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import ReactHookForm from "./components/ReactHookForm";
import SchemaValidation from "./components/SchemaValidation";

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

      <ExpandableText />

      {/* <MyForm />

      <ControlledForm /> */}

      <ReactHookForm />
      <SchemaValidation />
    </>
  );
};

export default App;
