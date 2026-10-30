import React from 'react';
import { Container, Row, Col, Card, Accordion, Badge } from 'react-bootstrap';
import { Award, ShieldCheck, Heart, Landmark } from 'lucide-react';

const Schemes = () => {
  const schemes = [
    {
      id: 1,
      name: "Kanyadan Yojana (General)",
      category: "OPEN",
      benefit: "₹25,000 Financial Grant + Wedding Kit",
      eligibility: "Income below ₹2.5L per annum, Bride age 18+, Groom age 21+",
      description: "Support for underprivileged couples in the general category to help them start their married life without debt."
    },
    {
      id: 2,
      name: "SC/ST Adarsh Vivah Grant",
      category: "SC/ST",
      benefit: "₹50,000 Direct Bank Transfer + Household Gift Box",
      eligibility: "Caste certificate required, Resident of Maharashtra",
      description: "High-level financial empowerment specifically designed for SC and ST communities participating in mass marriage events."
    },
    {
      id: 3,
      name: "OBC Welfare Wedding Scheme",
      category: "OBC",
      benefit: "₹35,000 Assistance + Kitchen Startup Kit",
      eligibility: "OBC Non-Creamy Layer Certificate required",
      description: "Dedicated welfare grant to ensure social equity and support for OBC families during community marriage ceremonies."
    }
  ];

  return (
    <div className="schemes-page py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Government Welfare Schemes</h2>
          <p className="text-muted">Explore financial assistance and support programs based on your category</p>
        </div>

        <Row className="mb-5">
          {schemes.map(scheme => (
            <Col key={scheme.id} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm rounded-4 p-3 bg-light">
                <Card.Body>
                  <div className="bg-primary text-white p-3 rounded-circle d-inline-block mb-4 shadow-sm">
                    <Landmark size={32} />
                  </div>
                  <Badge bg="info" className="d-block mb-2 py-2">{scheme.category} Category</Badge>
                  <h5 className="fw-bold mb-3">{scheme.name}</h5>
                  <h4 className="text-success fw-bold mb-4">{scheme.benefit}</h4>
                  <p className="text-muted small mb-0">{scheme.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="bg-primary-subtle p-5 rounded-4 shadow-sm border border-primary-subtle mt-5">
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-3">
            <Award className="text-primary" /> Eligibility & Verification Rules
          </h4>
          <Accordion flush className="bg-transparent">
            <Accordion.Item eventKey="0" className="bg-transparent">
              <Accordion.Header>Age Verification</Accordion.Header>
              <Accordion.Body>
                The bride must be at least 18 years old and the groom must be at least 21 years old as per government marriage laws. Birth certificates or School Leaving Certificates must be uploaded for verification.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="bg-transparent">
              <Accordion.Header>Income Criteria</Accordion.Header>
              <Accordion.Body>
                Financial aid is strictly for families with an annual income below ₹2.5 Lakhs (or as per current state guidelines). A valid Income Certificate issued by the Tahsildar is mandatory.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="bg-transparent">
              <Accordion.Header>Document Submission</Accordion.Header>
              <Accordion.Body>
                Couples must upload digital copies of Aadhaar, Address Proof, and Caste Certificates (if applying for SC/ST/OBC schemes) via their user dashboard before the registration deadline.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Schemes;
