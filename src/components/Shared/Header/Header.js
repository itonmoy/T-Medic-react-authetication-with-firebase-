
import React from 'react';
import './Header.css'
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "white"
      }
    return (
        <div>
            <Navbar className=""  bg="success" variant="light">
                <Container>
                    <h2 className="text-white">TONMOY'S MEDIC</h2>
                    
                    <Nav className="mx-auto navbar">

                        <Stack direction="horizontal" gap={5}>
                            <NavLink className="Nav-item " activeStyle={activeStyle}  to="/home">Home</NavLink>
                            <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/services">Services</NavLink>
                            <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/events">Events</NavLink>
                            <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/about">About</NavLink>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;