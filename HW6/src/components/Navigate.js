import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


export default class Navigate extends Component {
  savedUserComponent(){
    return(
      <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Saved Users - {this.props.saved_users.length}
      </DropdownToggle>
      <DropdownMenu end>
        {this.props.saved_users.map(user => (
           <DropdownItem key={user.id}>{user.username}</DropdownItem>
        ))}
        <DropdownItem divider />
        <DropdownItem
        onClick={() => this.props.resetSavedUsers()}>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    );
  }

  emptySavedUserComponent(){
    return(
      <NavItem>
         <NavLink href="#">No User Saved!</NavLink>
      </NavItem>
    );
  }
  
  render() {
    return (
      <div>
        <Navbar color="success" dark expand="md">
          <NavbarBrand href="/">WEEK-6 Practice</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Homework</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/complex">Practice</NavLink>
            </NavItem>
            {this.props.saved_users.length !== 0? this.savedUserComponent() : this.emptySavedUserComponent()}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
