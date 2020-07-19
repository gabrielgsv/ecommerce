import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import "./app.css" 

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
