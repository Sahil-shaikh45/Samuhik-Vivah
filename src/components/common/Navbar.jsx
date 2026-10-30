import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, User, LogIn, Menu, X } from 'lucide-react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const navigate = useNavigate();
  // Mock auth state for UI development
  const isLoggedIn = false;
  const userRole = null;

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-2 sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Heart className="text-danger me-2" fill="currentColor" size={28} />
          <span className="fw-bold fs-4 text-primary">Vivah<span className="text-danger">Bandhan</span></span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="fw-medium mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-medium mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/events" className="fw-medium mx-2">Events</Nav.Link>
            <Nav.Link as={Link} to="/schemes" className="fw-medium mx-2">Schemes</Nav.Link>
            <Nav.Link as={Link} to="/investors" className="fw-medium mx-2">Investors</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-medium mx-2">Contact</Nav.Link>
            
            {!isLoggedIn ? (
              <div className="ms-lg-3 d-flex gap-2">
                <Button variant="outline-primary" onClick={() => navigate('/login')} className="px-4 rounded-pill">
                  <LogIn size={18} className="me-1" /> Login
                </Button>
                <Button variant="primary" onClick={() => navigate('/register')} className="px-4 rounded-pill">
                  <User size={18} className="me-1" /> Register
                </Button>
              </div>
            ) : (
              <NavDropdown title={<User className="text-primary" />} id="user-nav-dropdown" align="end" className="ms-lg-3">
                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => {/* handle logout */}}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
