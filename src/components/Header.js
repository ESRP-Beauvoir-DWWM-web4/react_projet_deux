import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='mb-5'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Mon site</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Connexion</Nav.Link>
                    <Nav.Link href="/posts/list">Posts</Nav.Link>
                    <Nav.Link href="/users/list">Utilisateurs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;