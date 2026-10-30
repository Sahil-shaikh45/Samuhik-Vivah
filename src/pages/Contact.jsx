import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page py-5 bg-light">
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold text-primary mb-3">Contact Us</h2>
            <div className="title-underline mx-auto bg-danger mb-4" style={{ height: '3px', width: '80px' }}></div>
            <p className="lead text-muted">
              Get in touch with the Samuhik Vivah Management Team for any inquiries or support.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={4} className="mb-4">
            <Card className="border-0 shadow-sm p-4 rounded-4 h-100">
               <h5 className="fw-bold mb-4">Contact Details</h5>
               <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary-subtle p-3 rounded-circle text-primary"><Mail size={24}/></div>
                  <div><h6 className="fw-bold mb-0">Email</h6><p className="small text-muted mb-0">help@vivahportal.gov.in</p></div>
               </div>
               <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-danger-subtle p-3 rounded-circle text-danger"><Phone size={24}/></div>
                  <div><h6 className="fw-bold mb-0">Helpline</h6><p className="small text-muted mb-0">+91 1800-123-4567</p></div>
               </div>
               <div className="d-flex align-items-center gap-3">
                  <div className="bg-info-subtle p-3 rounded-circle text-info"><MapPin size={24}/></div>
                  <div><h6 className="fw-bold mb-0">Office</h6><p className="small text-muted mb-0">123 Marriage Bhavan, BKC, Mumbai</p></div>
               </div>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm p-4 p-lg-5 rounded-4 h-100">
               <h5 className="fw-bold mb-4 text-center">Send us a Message</h5>
               <Form>
                  <Row>
                     <Col md={6} className="mb-3">
                        <Form.Group>
                           <Form.Label>Name</Form.Label>
                           <Form.Control type="text" placeholder="Your full name" className="py-2 px-3 rounded-3" />
                        </Form.Group>
                     </Col>
                     <Col md={6} className="mb-3">
                        <Form.Group>
                           <Form.Label>Email</Form.Label>
                           <Form.Control type="email" placeholder="Your email address" className="py-2 px-3 rounded-3" />
                        </Form.Group>
                     </Col>
                  </Row>
                  <Form.Group className="mb-4">
                     <Form.Label>Message</Form.Label>
                     <Form.Control as="textarea" rows={4} placeholder="How can we help you?" className="py-2 px-3 rounded-3" />
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" size="lg" className="rounded-pill px-5 py-3 shadow-sm fw-bold">
                       <Send size={18} className="me-2"/> Send Message
                    </Button>
                  </div>
               </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
