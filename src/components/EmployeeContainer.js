import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import "./style.css";
// import List from "./components/List";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: []
  };

  componentDidMount() {
    API.getEmployee()
      .then((res) => {
        this.setState({
          employees: res.data.results
        });
      })
      .catch((err) => console.error());
  }

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    const sorted = this.state.employees
      .filter(results => (
        results.name.toLowerCase().includes(this.state.search.toLowerCase())
        ||
        results.email.toLowerCase().includes(this.state.search.toLowerCase())
        ||
        results.phone.includes(this.state.search)
      ));
    this.setState({
      employees: sorted
    });
  }
  
  render() {
    return (
      <>
        <Container>
          <Row id="top">
          <Col size="md-4">
            </Col>
            <Col size="md-4">
            <h1 id="header">Employee Search Engine</h1>
            </Col>
            <Col size="md-4">
            </Col>
          </Row>
          <Row>
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Row>
          <Row>
            <Col size="md-1">
            </Col>
            <Col size="md-1"><h2>Image</h2>
            </Col>
            <Col size="md-2"><h2>Name</h2>
            </Col>
            <Col size="md-2"><h2>Phone</h2>
            </Col>
            <Col size="md-3"><h2>Email</h2>
            </Col>
            <Col size="md-2"><h2>DOB</h2>
            </Col>
            <Col size="md-1">
            </Col>
          </Row>
          {/* <List employees={this.state.employees} search={this.state.search}/> */}
          {this.state.employees
            // .filter(results => (
            //   results.name.toLowerCase().includes(this.state.search.toLowerCase())
            //   ||
            //   results.email.toLowerCase().includes(this.state.search.toLowerCase())
            //   ||
            //   results.phone.includes(this.state.search)
            // )
            // )
            .map((results, i) => {
              return (
                <Row>
                  <Col size="md-1" key={i}>
                  </Col>
                  <Col size="md-1"><img src={results.picture.thumbnail} alt="thumbnail"></img>
                  </Col>
                  <Col size="md-2">{results.name.first} {results.name.last}
                  </Col>
                  <Col size="md-2">{results.phone}
                  </Col>
                  <Col size="md-3">{results.email}
                  </Col>
                  <Col size="md-2">{results.phone}
                  </Col>
                  <Col size="md-1">
                  </Col>
                </Row>
              );
            })}
        </Container>
      </>
    );
  };
}
export default EmployeeContainer;
