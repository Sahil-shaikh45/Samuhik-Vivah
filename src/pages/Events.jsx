import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Calendar, MapPin, Users, Info } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Maharashtra State Samuhik Vivah 2026",
      date: "May 15, 2026",
      location: "BKC Ground, Mumbai",
      capacity: "250 Couples",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      status: "Registration Open",
      organizer: "Social Welfare Dept, Maharashtra"
    },
    {
      id: 2,
      title: "Pune Community Mega Wedding",
      date: "June 10, 2026",
      location: "Shivaji Nagar Ground, Pune",
      capacity: "100 Couples",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      status: "Filling Fast",
      organizer: "Pune Municipal Corporation"
    },
    {
      id: 3,
      title: "Vidarbha Regional Samuhik Vivah",
      date: "July 05, 2026",
      location: "Reshimbagh Ground, Nagpur",
      capacity: "150 Couples",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
      status: "Upcoming",
      organizer: "Nagpur Welfare Committee"
    }
  ];

  return (
    <div className="events-page py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Upcoming Marriage Events</h2>
          <p className="text-muted">Find and register for a mass marriage ceremony in your region</p>
        </div>

        <Row className="g-4">
          {events.map(event => (
            <Col key={event.id} lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="position-relative">
                  <Card.Img variant="top" src={event.image} style={{ height: '200px', objectFit: 'cover' }} />
                  <Badge bg="danger" className="position-absolute top-0 end-0 m-3 px-3 py-2">
                    {event.status}
                  </Badge>
                </div>
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">{event.title}</h5>
                  <div className="text-muted small mb-3">
                    <p className="mb-2 d-flex align-items-center gap-2"><Calendar size={16} className="text-danger"/> {event.date}</p>
                    <p className="mb-2 d-flex align-items-center gap-2"><MapPin size={16} className="text-danger"/> {event.location}</p>
                    <p className="mb-0 d-flex align-items-center gap-2"><Users size={16} className="text-danger"/> Capacity: {event.capacity}</p>
                  </div>
                  <hr className="my-3 opacity-25" />
                  <p className="small text-muted mb-4"><Info size={14} className="me-1"/> Organizer: {event.organizer}</p>
                  <Button variant="outline-primary" className="w-100 rounded-pill">View Event Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
