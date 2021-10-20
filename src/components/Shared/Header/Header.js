import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tonmoy's Medic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link> */}
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;




























// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';
// // import { HashLink } from 'react-router-hash-link';
// const Header = () => {
//    const {user, logout } =useAuth();
//     return (
//         <div>
//             <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg" >
//                 <Container>
//                     <Navbar.Brand href="#home">TONMOY'S MEDIC</Navbar.Brand>
//                     <Navbar.Toggle />
//                     <Navbar.Collapse className="justify-content-end">
//                         <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/home#service">Services</Nav.Link>
//                         <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
//                         <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                         <Navbar.Text>
//                             Signed in as: <a href="#login">{user?.displayName }</a>
//                         </Navbar.Text>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//         </div>
//     );
// };

// export default Header;


// const activeStyle={
//     fontWeight: "bold",
//     color: "white"
//   }

// <Navbar className=""  bg="success" variant="light">
//                 <Container>
//                     <h2 className="text-white">TONMOY'S MEDIC</h2>
                    
//                     <Nav className="mx-auto navbar">
//                     <Navbar.Toggle />

//                         <Stack direction="horizontal" gap={5}>
//                             <NavLink className="Nav-item " activeStyle={activeStyle}  to="/home">Home</NavLink>
//                             <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/services">Services</NavLink>
//                             <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/events">Events</NavLink>
//                             <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/about">About</NavLink>
//                         </Stack>
//                     </Nav>
//                 </Container>
//             </Navbar>