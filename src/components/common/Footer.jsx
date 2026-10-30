import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <Container>
        <Row className="mb-4">
          <Col lg={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <Heart className="text-danger me-2" fill="currentColor" size={24} />
              <span className="fw-bold fs-4 text-white">Vivah<span className="text-danger">Bandhan</span></span>
            </div>
            <p className="text-white-50">
              Organizing and managing community mass marriage events efficiently. 
              Our mission is to support couples and simplify the social marriage process.
            </p>
            <div className="d-flex gap-3 mt-3">
              <Link to="#" className="text-white-50 hover-text-white transition-all"><Facebook size={20} /></Link>
              <Link to="#" className="text-white-50 hover-text-white transition-all"><Twitter size={20} /></Link>
              <Link to="#" className="text-white-50 hover-text-white transition-all"><Instagram size={20} /></Link>
              <Link to="#" className="text-white-50 hover-text-white transition-all"><Linkedin size={20} /></Link>
            </div>
          </Col>
          
          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-white fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-text-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover-text-white">About Us</Link></li>
              <li className="mb-2"><Link to="/events" className="text-white-50 text-decoration-none hover-text-white">Events</Link></li>
              <li className="mb-2"><Link to="/schemes" className="text-white-50 text-decoration-none hover-text-white">Schemes</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none hover-text-white">Contact Us</Link></li>
            </ul>
          </Col>
          
          <Col lg={2} md={4} className="mb-4">
            <h5 className="text-white fw-bold mb-3">User Roles</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/login" className="text-white-50 text-decoration-none hover-text-white">Bride/Groom Login</Link></li>
              <li className="mb-2"><Link to="/login" className="text-white-50 text-decoration-none hover-text-white">Admin Dashboard</Link></li>
              <li className="mb-2"><Link to="/investors" className="text-white-50 text-decoration-none hover-text-white">Investor Portal</Link></li>
              <li className="mb-2"><Link to="/login" className="text-white-50 text-decoration-none hover-text-white">Govt Authority</Link></li>
            </ul>
          </Col>
          
          <Col lg={4} md={4} className="mb-4">
            <h5 className="text-white fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center gap-2">
                <MapPin size={18} className="text-danger" />
                <span className="text-white-50">123 Marriage Bhavan, Community Road, Mumbai, India</span>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <Phone size={18} className="text-danger" />
                <span className="text-white-50">+91 1800-123-4567</span>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <Mail size={18} className="text-danger" />
                <span className="text-white-50">help@vivahportal.gov.in</span>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="bg-white opacity-25" />
        
        <div className="text-center text-white-50 small mt-4">
          <p>© {new Date().getFullYear()} Samuhik Vivah Management System. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
