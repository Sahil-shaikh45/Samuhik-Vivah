import React from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Heart, ShieldCheck, Coins, Award } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  // Mock data for profiles
  const profiles = [
    { id: 1, bride: "Priya Sharma", groom: "Rahul Verma", age: "24 & 26", city: "Mumbai", category: "OBC" },
    { id: 2, bride: "Anjali Gupta", groom: "Suresh Mehra", age: "22 & 25", city: "Pune", category: "OPEN" },
    { id: 3, bride: "Kavita Das", groom: "Amit Singh", age: "23 & 27", city: "Nagpur", category: "SC" },
    { id: 4, bride: "Sneha Patil", groom: "Vijay Kadam", age: "25 & 28", city: "Nashik", category: "ST" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-light py-5 position-relative overflow-hidden" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #fdf2f2 0%, #fff 100%)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0 z-index-1">
              <Badge bg="danger" className="mb-3 px-3 py-2 rounded-pill">VivahBandhan Event 2026</Badge>
              <h1 className="display-3 fw-bold text-primary mb-4">Celebrate Your Union with <span className="text-danger">VivahBandhan</span></h1>
              <p className="lead text-muted mb-5">
              VivahBandhan is a dedicated portal to organize, manage and celebrate mass marriage ceremonies with dignity, support, and transparency.
              </p>              <div className="d-flex gap-3">
                <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill shadow" onClick={() => navigate('/register')}>
                  Register Now
                </Button>
                <Button variant="outline-danger" size="lg" className="px-5 py-3 rounded-pill" onClick={() => navigate('/events')}>
                  Explore Events
                </Button>
              </div>
            </Col>
            <Col lg={6} className="position-relative">
              <div className="hero-image-container position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
                  alt="Wedding Ceremony" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ border: '15px solid white' }}
                />
                <div className="position-absolute bottom-0 start-0 translate-middle-y bg-white p-4 rounded-4 shadow-lg d-none d-md-block" style={{ marginLeft: '-30px', borderLeft: '5px solid #dc3545' }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger-subtle p-3 rounded-circle text-danger">
                      <Heart size={24} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-0">500+</h4>
                      <p className="text-muted mb-0 small">Couples Registered</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Event Info Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold section-title">Upcoming Grand Event</h2>
            <div className="title-underline mx-auto bg-danger" style={{ height: '3px', width: '80px' }}></div>
          </div>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <Row className="g-0">
              <Col md={4}>
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" className="img-fluid h-100 object-fit-cover" alt="Venue" />
              </Col>
              <Col md={8}>
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h3 className="fw-bold text-primary mb-2">Maharashtra State Samuhik Vivah 2026</h3>
                      <p className="text-muted"><MapPin size={18} className="me-2 text-danger" /> BKC Ground, Mumbai, Maharashtra</p>
                    </div>
                    <Badge bg="success" className="px-3 py-2">Open for Registration</Badge>
                  </div>
                  <Row className="mb-4">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="d-flex align-items-center gap-2">
                        <Calendar className="text-danger" size={20} />
                        <div>
                          <p className="mb-0 small text-muted">Event Date</p>
                          <p className="mb-0 fw-bold">May 15, 2026</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="d-flex align-items-center gap-2">
                        <Users className="text-danger" size={20} />
                        <div>
                          <p className="mb-0 small text-muted">Couples</p>
                          <p className="mb-0 fw-bold">250 Capacity</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="d-flex align-items-center gap-2">
                        <ShieldCheck className="text-danger" size={20} />
                        <div>
                          <p className="mb-0 small text-muted">Organizer</p>
                          <p className="mb-0 fw-bold">Govt. Welfare Dept</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Button variant="danger" className="px-4 py-2">View Full Details</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      {/* Profiles Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Registered Couple Profiles</h2>
            <p className="text-muted">Meet our blessed couples joining the ceremony</p>
          </div>
          <Row>
            {profiles.map(profile => (
              <Col key={profile.id} lg={3} md={6} className="mb-4">
                <Card className="border-0 shadow-sm h-100 text-center profile-card">
                  <div className="p-4 pt-5 position-relative">
                    <div className="avatar-wrapper mx-auto mb-3" style={{ width: '120px', height: '120px' }}>
                      <img 
                        src={`https://i.pravatar.cc/150?u=${profile.id}`} 
                        alt="Profile" 
                        className="rounded-circle img-fluid border border-4 border-white shadow-sm"
                      />
                    </div>
                    <h5 className="fw-bold mb-1">{profile.bride} & {profile.groom}</h5>
                    <p className="text-muted small mb-3">{profile.city} • Age: {profile.age}</p>
                    <Badge bg="secondary-subtle" className="text-secondary px-3 py-2 rounded-pill">Category: {profile.category}</Badge>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="link" className="text-danger text-decoration-none fw-bold">View All Profiles →</Button>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center g-4">
            <Col md={3}>
              <div className="p-3">
                <h2 className="display-4 fw-bold">1,250+</h2>
                <p className="mb-0 opacity-75">Total Registered</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="p-3">
                <h2 className="display-4 fw-bold">980+</h2>
                <p className="mb-0 opacity-75">Verified Couples</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="p-3">
                <h2 className="display-4 fw-bold">45+</h2>
                <p className="mb-0 opacity-75">Active Investors</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="p-3">
                <h2 className="display-4 fw-bold">₹25L+</h2>
                <p className="mb-0 opacity-75">Funds Collected</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Govt Schemes Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Government Welfare Schemes</h2>
            <p className="text-muted">Financial support provided based on social categories</p>
          </div>
          <Row>
            {[
              { title: "SC/ST Category", amount: "₹50,000", description: "Direct financial assistance + household kit for SC/ST couples." },
              { title: "OBC Category", amount: "₹35,000", description: "Welfare grant and wedding gift packages for OBC community." },
              { title: "Minority Support", amount: "₹40,000", description: "Special schemes for minority communities participating in mass marriage." },
              { title: "Open Category", amount: "₹25,000", description: "Economic support for underprivileged couples in open category." }
            ].map((scheme, idx) => (
              <Col key={idx} md={6} lg={3} className="mb-4">
                <Card className="h-100 border-0 shadow-sm text-center p-3">
                  <Card.Body>
                    <div className="bg-danger-subtle text-danger p-3 rounded-circle d-inline-block mb-3">
                      <Award size={32} />
                    </div>
                    <h5 className="fw-bold">{scheme.title}</h5>
                    <h4 className="text-primary fw-bold my-3">{scheme.amount}</h4>
                    <p className="text-muted small mb-0">{scheme.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Memories from Previous Events</h2>
          </div>
          <Row className="g-3">
            <Col md={4}>
              <img src="https://images.unsplash.com/photo-1544006659-f0b21884cb1d?auto=format&fit=crop&q=80&w=600" className="img-fluid rounded-3 shadow-sm mb-3" alt="Gallery" />
              <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600" className="img-fluid rounded-3 shadow-sm" alt="Gallery" />
            </Col>
            <Col md={4}>
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600" className="img-fluid rounded-3 shadow-sm h-100 object-fit-cover" alt="Gallery" />
            </Col>
            <Col md={4}>
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600" className="img-fluid rounded-3 shadow-sm mb-3" alt="Gallery" />
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600" className="img-fluid rounded-3 shadow-sm" alt="Gallery" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-white text-center">
        <Container className="bg-danger text-white p-5 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-4">Want to support this noble cause?</h2>
          <p className="lead mb-4 opacity-75">Join as an investor or sponsor and help couples start their new journey.</p>
          <Button variant="light" size="lg" className="px-5 text-danger fw-bold rounded-pill" onClick={() => navigate('/investors')}>
            Become a Sponsor
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
