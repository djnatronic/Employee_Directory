import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { render } from "@testing-library/react";
import Jumbotron from "../Jumbotron";

class Table extends Component {
    state = {
      result: {},
      search: ""
    };


    searchMovies = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

render(){
  return (
      <div>
      <Jumbotron/>
      </div>
  );
};
}
export default Table;