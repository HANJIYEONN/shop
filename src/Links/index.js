import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { publicRoutes } from "../Routes/allRoutes";
import { useQuery } from "react-query";
import axios from "axios";

const Index = () => {
  let navigate = useNavigate();


  /* useQuery장점
      1. 성공/실패/로딩중 쉽게 파악 가능
  */
  let result = useQuery(['작명'], ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    })
  })

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">penguin</Navbar.Brand>
          <Nav className="me-auto">
            {publicRoutes.map((route, idx) => (
              <Nav.Link
                key={idx}
                onClick={() => {
                  navigate(route.path);
                }}
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
          
          <Nav className="ms-auto">{result.isLoading? '로딩중' : result.data.name}</Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
