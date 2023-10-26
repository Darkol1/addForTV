import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const element = (
    <BrowserRouter basename="/addForTV">
      <App />
    </BrowserRouter>
  );
   
  const container = document.getElementById('root');
   
  ReactDOM.render(element, container);