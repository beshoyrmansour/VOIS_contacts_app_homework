import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouterIndex from "./views";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainRouterIndex />
      </Router>
    </div>
  );
}

export default App;
