import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <App />
// );

// ReactDOM.render((
//     <BrowserRouter>
//     <App/>
//     </BrowserRouter>

// ), document.getElementById("root"));
const element = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
   
  const container = document.getElementById('root');
   
  ReactDOM.render(element, container);