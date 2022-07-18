import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Container } from "react-bootstrap";
import { NavBar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <NavBar brandName="React-store-app" />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
