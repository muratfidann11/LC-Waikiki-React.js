import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import UserList from "./UserList";
import UserInfo from "./UserInfo";

export default class Complex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_userSelected: false,
      selected_user: "",
    };
    this.select_user = this.select_user.bind(this); // reference for this.setState is not a function error: https://stackoverflow.com/questions/31045716/react-this-setstate-is-not-a-function
  }

  select_user(user) {
    this.setState({ selected_user: user, is_userSelected: true });
  }

  render() {
    return (
      <div>
        <Container>
          <br />
          <Row className="align-items-center">
            {/* User List Component */}
            <Col xs="3" className="align-items-center">
              <UserList
                users={this.props.users}
                saveUser={this.props.saveUser}
                selected_user={this.state.selected_user}
                select_user_func={this.select_user}
              />
              <br />
              <Button
                disabled={!this.state.is_userSelected}
                color="success"
                onClick={() => this.props.saveUser(this.state.selected_user)}
                style={{textAlign:"center"}}
              >
                Save User
              </Button>
            </Col>

            {/* User Info Component */}
            <Col xs="9">
              <UserInfo selected_user={this.state.selected_user} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
