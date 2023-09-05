import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { publicRoutes } from "../Routes/allRoutes";

const Index = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">penguin</Navbar.Brand>
          <Nav className="me-auto">
            {publicRoutes.map((route, idx) => (
              <Nav.Link
                onClick={() => {
                  navigate(route.path);
                }}
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
