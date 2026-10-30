import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Coins, Heart, Handshake, Users, ShieldCheck, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InvestorsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="investors-page py-5 bg-light">
      <Container>
        <Row className="mb-5 align-items-center">
          <Col lg={6}>
            <h2 className="fw-bold text-primary display-5 mb-4">Support a Couple's <span className="text-danger">New Beginning</span></h2>
            <p className="lead text-muted mb-5">
              Your contribution can help underprivileged couples celebrate their union with dignity. Join as a sponsor and make a lasting social impact.
            </p>
            <div className="d-flex gap-3">
               <Button variant="primary" size="lg" className="rounded-pill px-5 shadow" onClick={() => navigate('/register')}>Register as Sponsor</Button>
               <Button variant="outline-primary" size="lg" className="rounded-pill px-5">View Impact</Button>
            </div>
          </Col>
          <Col lg={6}>
             <div className="bg-white p-4 rounded-4 shadow-sm mt-5 mt-lg-0">
                <div className="d-flex align-items-center gap-4 mb-4">
                   <div className="bg-primary-subtle p-3 rounded-circle text-primary"><Coins size={32}/></div>
                   <div>
                      <h4 className="fw-bold mb-0">₹45 Lakhs</h4>
                      <p className="text-muted small mb-0">Total Funds Collected in 2026</p>
                   </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                   <div className="bg-success-subtle p-3 rounded-circle text-success"><Heart size={32}/></div>
                   <div>
                      <h4 className="fw-bold mb-0">500+ Couples</h4>
                      <p className="text-muted small mb-0">Directly Supported through Donations</p>
                   </div>
                </div>
             </div>
          </Col>
        </Row>

        <h3 className="fw-bold text-center mb-5 mt-5">Why Sponsor Us?</h3>
        <Row className="g-4">
           {[
             { icon: <Handshake size={32}/>, title: "Social Impact", desc: "Reduce the financial burden of marriage on underprivileged families." },
             { icon: <ShieldCheck size={32}/>, title: "100% Transparency", desc: "Track every rupee you contribute through our digital dashboard." },
             { icon: <PieChart size={32}/>, title: "Direct Allocation", desc: "Choose specific events or gift types (like kitchen kits) to sponsor." },
             { icon: <Users size={32}/>, title: "Community Reach", desc: "Join a network of corporate and individual philanthropists." }
           ].map((item, i) => (
             <Col key={i} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 rounded-4 profile-card">
                   <div className="text-primary mb-3 mx-auto">{item.icon}</div>
                   <h5 className="fw-bold mb-2">{item.title}</h5>
                   <p className="small text-muted mb-0">{item.desc}</p>
                </Card>
             </Col>
           ))}
        </Row>

        <Card className="border-0 shadow-lg bg-primary text-white p-5 rounded-4 mt-5 text-center">
           <h2 className="fw-bold mb-4">Become a Platinum Sponsor</h2>
           <p className="lead mb-5 opacity-75">Corporate partners receive special recognition at the venue, digital branding on the portal, and certificates of appreciation from the welfare department.</p>
           <div className="d-flex justify-content-center gap-3">
              <Button variant="light" size="lg" className="text-primary fw-bold rounded-pill px-5" onClick={() => navigate('/contact')}>Contact Partnership Team</Button>
           </div>
        </Card>
      </Container>
    </div>
  );
};

export default InvestorsPage;
