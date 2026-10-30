import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Heart, Users, ShieldCheck, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold text-primary mb-3">About VivahBandhan Portal</h2>
            <div className="title-underline mx-auto bg-danger mb-4" style={{ height: '3px', width: '80px' }}></div>
            <p className="lead text-muted">
              Our mission is to simplify the social marriage process and support underprivileged couples in starting their new journey with dignity and community joy.
            </p>
          </Col>
        </Row>

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" 
              alt="Community Wedding" 
              className="img-fluid rounded-4 shadow-lg mb-4 mb-md-0"
            />
          </Col>
          <Col md={6} className="ps-lg-5">
            <h3 className="fw-bold mb-4">Our Vision & Purpose</h3>
            <p className="text-muted mb-4">
              Mass marriages, or 'Samuhik Vivah', are a beautiful tradition that brings communities together while reducing the financial burden on individual families. Our digital portal modernizes this tradition by providing a transparent and efficient management system.
            </p>
            <div className="d-flex gap-4 mb-4">
               <div className="bg-primary-subtle p-3 rounded-circle text-primary"><Target size={24}/></div>
               <div>
                  <h5 className="fw-bold mb-1">Empowerment</h5>
                  <p className="small text-muted mb-0">Direct financial support through government schemes and investor contributions.</p>
               </div>
            </div>
            <div className="d-flex gap-4">
               <div className="bg-danger-subtle p-3 rounded-circle text-danger"><ShieldCheck size={24}/></div>
               <div>
                  <h5 className="fw-bold mb-1">Transparency</h5>
                  <p className="small text-muted mb-0">A secure document verification system and public fund tracking for all stakeholders.</p>
               </div>
            </div>
          </Col>
        </Row>

        <Row className="text-center g-4 mt-5">
           <Col md={4}>
              <Card className="border-0 shadow-sm p-4 h-100 rounded-4">
                 <h4 className="fw-bold text-primary">5000+</h4>
                 <p className="text-muted">Couples Married</p>
              </Card>
           </Col>
           <Col md={4}>
              <Card className="border-0 shadow-sm p-4 h-100 rounded-4">
                 <h4 className="fw-bold text-primary">₹1Cr+</h4>
                 <p className="text-muted">Total Financial Aid</p>
              </Card>
           </Col>
           <Col md={4}>
              <Card className="border-0 shadow-sm p-4 h-100 rounded-4">
                 <h4 className="fw-bold text-primary">50+</h4>
                 <p className="text-muted">District Events</p>
              </Card>
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
