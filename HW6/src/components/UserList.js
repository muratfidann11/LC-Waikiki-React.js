import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

export default class UserList extends Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItemHeading>Users</ListGroupItemHeading>
            {this.props.users.map(user => (
                <ListGroupItem
                style={{border: "1px solid", borderRadius: "3px"}}
                active={this.props.selected_user? user.id === this.props.selected_user.id : false}
                onClick={() => this.props.select_user_func(user)}
                key={user.id}>{user.username}</ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  }
}
