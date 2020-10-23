import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouterIndex from "./views";
import Header from "./components/Header";
import FAB from "./components/FAB";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FAB />
        <MainRouterIndex />
      </Router>
    </div>
  );
}

export default App;
