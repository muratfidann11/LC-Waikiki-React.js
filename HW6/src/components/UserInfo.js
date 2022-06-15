import React, { Component } from "react";
import { Table } from "reactstrap";

export default class UserInfo extends Component {
  show_info(user) {
    return (
      <div>
        <Table bordered responsive>
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.selected_user === "" ? (
          <h1 style={{textAlign: "center"}}> No User Selected! </h1>
        ) : (
          this.show_info(this.props.selected_user)
        )}
      </div>
    );
  }
}
