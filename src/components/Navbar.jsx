import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Rick</Navbar.Brand>
                    <Nav>
                        <NavLink className="m-5 navlinks" to="/">
                            Home
                        </NavLink>
                        <NavLink className="m-5 navlinks" to="/characters">
                            Characters
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
