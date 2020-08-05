import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Jumbotron from "./Jumbotron/index"
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import Names from './names.json';
import Table from './Table';

console.log(Names.results)

var Results = Names.results




function ProductTable(props) {
  const { products } = props;
  return (
    <table>
      <caption>Our products</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class OmdbContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
    /* this.searchMovies(); */
    this.setState({result: Names.results})

  }
 


/*   searchMovies (){
    API.search()
      .then(res => this.setState({ result: res.data }))
      console.log(this.state.result)
      .catch(err => console.log(err));
  };
  */







  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Jumbotron/>
   
        <Row>
          <Col size="md-12">
            <Table result={this.state.result}/>
          </Col>
         {/*  <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
