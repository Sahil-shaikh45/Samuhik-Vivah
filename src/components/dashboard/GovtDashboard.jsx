import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, ProgressBar } from 'react-bootstrap';
import { ShieldCheck, FileText, Landmark, Users } from 'lucide-react';

const GovtDashboard = () => {
  return (
    <div className="govt-dashboard bg-light py-4" style={{ minHeight: '90vh' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="bg-white p-4 rounded-4 shadow-sm border-start border-4 border-success">
               <h3 className="fw-bold mb-1 text-success"><Landmark className="me-2"/> Government Authority Portal</h3>
               <p className="text-muted mb-0">Monitor welfare schemes and verify social category distributions</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-4 g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
               <h5 className="fw-bold text-muted mb-4">SC/ST Fund Utilization</h5>
               <ProgressBar now={75} variant="success" className="mb-3" style={{ height: '10px' }} />
               <div className="d-flex justify-content-between"><span className="small">Used: ₹15L</span><span className="small">Total: ₹20L</span></div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
               <h5 className="fw-bold text-muted mb-4">OBC Fund Utilization</h5>
               <ProgressBar now={45} variant="info" className="mb-3" style={{ height: '10px' }} />
               <div className="d-flex justify-content-between"><span className="small">Used: ₹9L</span><span className="small">Total: ₹20L</span></div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
               <h5 className="fw-bold text-muted mb-4">Open Category Support</h5>
               <ProgressBar now={30} variant="warning" className="mb-3" style={{ height: '10px' }} />
               <div className="d-flex justify-content-between"><span className="small">Used: ₹3L</span><span className="small">Total: ₹10L</span></div>
            </Card>
          </Col>
        </Row>

        <Card className="border-0 shadow-sm rounded-4 p-4">
           <h4 className="fw-bold mb-4">Verification Audit Log</h4>
           <Table responsive className="small">
              <thead><tr><th>Date</th><th>Couple ID</th><th>Category</th><th>Scheme Applied</th><th>Action Taken</th></tr></thead>
              <tbody>
                <tr><td>Mar 07, 2026</td><td>VV-102</td><td>SC</td><td>Kanyadan Yojana</td><td><Badge bg="success">Scheme Approved</Badge></td></tr>
                <tr><td>Mar 06, 2026</td><td>VV-205</td><td>OBC</td><td>Welfare Grant</td><td><Badge bg="info">Awaiting Bank Transfer</Badge></td></tr>
              </tbody>
           </Table>
        </Card>
      </Container>
    </div>
  );
};

export default GovtDashboard;
