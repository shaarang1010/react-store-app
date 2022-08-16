import React from "react";

import { Container, Navbar } from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import { Badge, Button } from "react-bootstrap";

type NavBarProps = {
  brandName: string;
  cartItems?: string;
};

export const NavBar: React.FC<NavBarProps> = ({ brandName, cartItems }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="light">
              <BsCartCheck />{" "}
              <Badge bg="secondary">{cartItems ? cartItems : 0}</Badge>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
