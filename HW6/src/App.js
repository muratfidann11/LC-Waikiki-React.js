import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Basic from "./components/Basic";
import Complex from "./components/Complex";
import Navigate from "./components/Navigate";
import axios from "axios";
import { Container, Row, Spinner } from "reactstrap";
import alertify from "alertifyjs";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_ready: false, // check data is ready and change component.
      users: [], // all users
      saved_users: [], // saved users
    };
  }

  // fetch users.
  getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({ users: response.data, is_ready: true }); //{ users: response.data }
    });

    //setTimeout(() => { this.setState({is_ready: true});}, 2000); // to see Loading..
  };

  // save user.
  saveUser = (user) => {
    if (!this.state.saved_users.includes(user)) {
      let saved_users = this.state.saved_users;
      saved_users.push(user);
      this.setState({ saved_users: saved_users });
      alertify.success(user.username + " was saved successfully!");
    } else {
      alertify.error(user.username + " is already saved!");
    }
  };

  // delete all saved users.
  resetSavedUsers = () => {
    this.setState({ saved_users: [] });
    alertify.warning("All saved users deleted successfully!");
  };

  componentDidMount() {
    setTimeout(() => { this.getUsers();; }, 1000); // sleep just to see loading before data is ready.
    
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {/* Navigator Component */}
          <Navigate
            saved_users={this.state.saved_users}
            resetSavedUsers={this.resetSavedUsers}
          />
        </Row>
        <Row>
          {/* Routes */}
          <Routes>
            {/* Route for Basic - Homework */}
            <Route
              path="/"
              element={
                this.state.is_ready ? (
                  <Basic users={this.state.users} />
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )
              }
            />

            {/* Route for Complex - Myself */}
            <Route
              path="/complex"
              element={
                this.state.is_ready ? (
                  <Complex
                    users={this.state.users}
                    saveUser={this.saveUser}
                    savedUsers={this.state.saved_users}
                  />
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )
              }
            />
          </Routes>
        </Row>
      </Container>
    );
  }
}
