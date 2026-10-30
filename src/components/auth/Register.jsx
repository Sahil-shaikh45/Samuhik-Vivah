import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ProgressBar, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '', password: '', role: 'BRIDE',
    brideName: '', groomName: '', brideAge: '', groomAge: '',
    contact: '', category: 'OPEN', address: '', familyInfo: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', formData);
      console.log("Registration success:", response.data);
      setStep(4);
    } catch (err) {
      setError(err.response?.data || 'Registration failed. Check if backend is running.');
      console.error("Reg Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col lg={4} className="bg-primary text-white p-4 p-lg-5 text-center d-flex flex-column justify-content-center">
                    <UserPlus size={48} className="mb-4 mx-auto" />
                    <h3 className="fw-bold mb-3">Join Us</h3>
                    <p className="small opacity-75 mb-4">Complete 3 simple steps to register for the mass marriage event.</p>
                    <div className="registration-steps text-start px-3">
                      <div className={`d-flex align-items-center mb-3 ${step === 1 ? 'fw-bold' : 'opacity-50'}`}>
                        <div className="bg-white text-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>1</div>
                        <span>Account Details</span>
                      </div>
                      <div className={`d-flex align-items-center mb-3 ${step === 2 ? 'fw-bold' : 'opacity-50'}`}>
                        <div className="bg-white text-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>2</div>
                        <span>Profile Info</span>
                      </div>
                      <div className={`d-flex align-items-center mb-3 ${step === 3 ? 'fw-bold' : 'opacity-50'}`}>
                        <div className="bg-white text-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>3</div>
                        <span>Address & Category</span>
                      </div>
                    </div>
                  </Col>
                  
                  <Col lg={8} className="p-4 p-lg-5">
                    <ProgressBar now={(step/3)*100} className="mb-4" style={{ height: '8px' }} />
                    
                    {step === 1 && (
                      <div className="step-1">
                        <h4 className="fw-bold mb-4">Step 1: Account Setup</h4>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Registration Type</Form.Label>
                            <Form.Select name="role" value={formData.role} onChange={handleChange}>
                              <option value="BRIDE">Bride & Groom (Couple)</option>
                              <option value="INVESTOR">Investor / Sponsor</option>
                              <option value="GOVT">Govt Official</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Username / Email</Form.Label>
                            <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} required />
                          </Form.Group>
                          <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                          </Form.Group>
                          <Button variant="primary" className="w-100 rounded-pill" onClick={nextStep}>Next Step</Button>
                        </Form>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="step-2">
                        <h4 className="fw-bold mb-4">Step 2: Personal Information</h4>
                        <Form>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Bride Name</Form.Label>
                                <Form.Control name="brideName" value={formData.brideName} onChange={handleChange} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Groom Name</Form.Label>
                                <Form.Control name="groomName" value={formData.groomName} onChange={handleChange} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Bride Age</Form.Label>
                                <Form.Control type="number" name="brideAge" value={formData.brideAge} onChange={handleChange} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Groom Age</Form.Label>
                                <Form.Control type="number" name="groomAge" value={formData.groomAge} onChange={handleChange} />
                              </Form.Group>
                            </Col>
                          </Row>
                          <div className="d-flex gap-3 mt-4">
                            <Button variant="outline-secondary" className="w-100 rounded-pill" onClick={prevStep}>Back</Button>
                            <Button variant="primary" className="w-100 rounded-pill" onClick={nextStep}>Next Step</Button>
                          </div>
                        </Form>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="step-3">
                        <h4 className="fw-bold mb-4">Step 3: Family & Category</h4>
                        {error && <Alert variant="danger" className="rounded-3 small">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Label>Social Category</Form.Label>
                            <Form.Select name="category" value={formData.category} onChange={handleChange}>
                              <option value="OPEN">Open (General)</option>
                              <option value="OBC">OBC</option>
                              <option value="SC">SC</option>
                              <option value="ST">ST</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control name="contact" value={formData.contact} onChange={handleChange} />
                          </Form.Group>
                          <Form.Group className="mb-4">
                            <Form.Label>Full Address</Form.Label>
                            <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} />
                          </Form.Group>
                          <div className="d-flex gap-3 mt-4">
                            <Button variant="outline-secondary" className="w-100 rounded-pill" onClick={prevStep} disabled={loading}>Back</Button>
                            <Button variant="success" type="submit" className="w-100 rounded-pill" disabled={loading}>
                              {loading ? 'Registering...' : 'Submit Registration'}
                            </Button>
                          </div>
                        </Form>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="text-center py-4">
                        <CheckCircle2 size={64} className="text-success mb-4" />
                        <h3 className="fw-bold">Registration Successful!</h3>
                        <p className="text-muted mb-4">Your account has been created. Please login to upload your documents and verify your profile.</p>
                        <Button variant="primary" className="px-5 rounded-pill" onClick={() => navigate('/login')}>Go to Login</Button>
                      </div>
                    )}

                    <div className="text-center mt-5">
                      <p className="text-muted small">Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Sign In</Link></p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
