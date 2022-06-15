import React, { Component } from "react";

export default class Basic extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <ul key={user.username}>
            <li>{user.username}: {user.name}</li>
          </ul>
        ))}
      </div>
    );
  }
}
