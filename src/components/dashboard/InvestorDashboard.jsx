import React from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, ListGroup } from 'react-bootstrap';
import { Coins, Heart, FileText, Calendar, Handshake } from 'lucide-react';

const InvestorDashboard = () => {
  return (
    <div className="investor-dashboard bg-light py-4" style={{ minHeight: '90vh' }}>
      <Container>
        <Row className="mb-4">
          <Col md={8}>
            <h3 className="fw-bold">Investor / Sponsor Dashboard</h3>
            <p className="text-muted">Empower a couple's new beginning through your contribution</p>
          </Col>
          <Col md={4} className="text-md-end">
             <Button variant="danger" className="rounded-pill px-4"><Coins size={18} className="me-2"/> Contribute Funds</Button>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 mb-4">
               <Card.Body className="p-4">
                  <h5 className="fw-bold mb-4">My Contribution Status</h5>
                  <Row className="text-center g-3">
                     <Col md={4}><div className="bg-light p-3 rounded-4"><h3 className="fw-bold text-primary mb-0">₹5L</h3><p className="text-muted small mb-0">Total Contributed</p></div></Col>
                     <Col md={4}><div className="bg-light p-3 rounded-4"><h3 className="fw-bold text-success mb-0">12</h3><p className="text-muted small mb-0">Couples Supported</p></div></Col>
                     <Col md={4}><div className="bg-light p-3 rounded-4"><h3 className="fw-bold text-info mb-0">2</h3><p className="text-muted small mb-0">Active Events</p></div></Col>
                  </Row>
               </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm rounded-4 p-4">
               <h5 className="fw-bold mb-4">Upcoming Events for Sponsorship</h5>
               {[
                 { title: 'Mumbai Mega Vivah 2026', date: 'May 15', needs: 'Gold Sponsor' },
                 { title: 'Pune Community Wedding', date: 'June 10', needs: 'Kitchen Kits' }
               ].map((event, i) => (
                 <div key={i} className="d-flex align-items-center justify-content-between p-3 border rounded-4 mb-2 bg-white shadow-sm">
                    <div className="d-flex align-items-center gap-3">
                       <Calendar className="text-danger" size={24}/>
                       <div><h6 className="fw-bold mb-0">{event.title}</h6><p className="small text-muted mb-0">{event.date} • Needs: {event.needs}</p></div>
                    </div>
                    <Button variant="outline-danger" size="sm" className="rounded-pill">Sponsor This</Button>
                 </div>
               ))}
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 p-4">
               <h5 className="fw-bold mb-4"><Heart className="text-danger me-2" fill="currentColor"/> Fund Tracking</h5>
               <ListGroup variant="flush">
                  <ListGroup.Item className="px-0 py-3 border-light">
                     <p className="fw-bold mb-1 small">Venue Seating Arrangement</p>
                     <div className="d-flex justify-content-between align-items-center"><span className="text-muted small">₹1.2L Allocated</span><Badge bg="success">Active</Badge></div>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-3 border-light">
                     <p className="fw-bold mb-1 small">Kitchen Kits Distribution</p>
                     <div className="d-flex justify-content-between align-items-center"><span className="text-muted small">₹2.5L Allocated</span><Badge bg="info">In Process</Badge></div>
                  </ListGroup.Item>
               </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InvestorDashboard;
