import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container,
  Button,
} from "reactstrap";

export default () => {
  return (
    <Navbar className="navbar-expand bg-light">
      <NavbarBrand className="" href="/">
        CookBook Pro
      </NavbarBrand>
      <Nav className="navbar-nav me-auto">
        <NavItem>
          <NavLink href="/meal-plans">Meal Plans</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/search">Search</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/recipes">Recipes</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/shopping-list">Shopping List</NavLink>
        </NavItem>

        <NavItem>
          <Container></Container>
        </NavItem>
      </Nav>
      <Button className="" href="/Login">
        Login
      </Button>
    </Navbar>
  );
};
