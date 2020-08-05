import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
  return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 Jumbo">Employee Directory</h1>
    <p className="lead Jumbo">Click on Carrots to filter by heading or use the search box to narrow your results.</p>
  </div>
</div>
  );
}

export default Jumbotron;
