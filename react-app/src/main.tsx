import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import MyApp from "./components/expense-tracker/components/MyApp.tsx";
import AppFetch from "./components/fetch/components/AppFetch.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppFetch />
    {/* <App />
    <MyApp /> */}
  </StrictMode>
);
