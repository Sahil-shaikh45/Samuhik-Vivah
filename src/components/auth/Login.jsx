import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Heart } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'BRIDE' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username: formData.username,
        password: formData.password
      });

      const user = response.data;
      console.log("Login successful:", user);
      
      // Save full user data (including real names) to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      // Role-based redirection
      switch(user.role) {
        case 'ADMIN':
          navigate('/admin-dashboard');
          break;
        case 'GOVT':
          navigate('/govt-dashboard');
          break;
        case 'INVESTOR':
          navigate('/investor-dashboard');
          break;
        default:
          navigate('/dashboard'); // For Bride/Groom
      }
    } catch (err) {
      setError(err.response?.data || 'Login failed. Check your credentials.');
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page bg-light py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="bg-primary p-4 text-center text-white">
                <Heart className="mb-2" size={32} fill="white" />
                <h3 className="fw-bold mb-0">Welcome Back</h3>
                <p className="opacity-75 small">Login to your Vivah Portal account</p>
              </div>
              <Card.Body className="p-4 p-lg-5">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Login As</Form.Label>
                    <Form.Select 
                      name="role" 
                      value={formData.role} 
                      onChange={handleChange}
                      className="py-2 px-3 rounded-3"
                    >
                      <option value="BRIDE">Bride</option>
                      <option value="GROOM">Groom</option>
                      <option value="ADMIN">Administrator</option>
                      <option value="GOVT">Govt Authority</option>
                      <option value="INVESTOR">Investor / Sponsor</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Username / Email</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="username"
                      placeholder="Enter your username" 
                      className="py-2 px-3 rounded-3"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password"
                      placeholder="••••••••" 
                      className="py-2 px-3 rounded-3"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 py-2 fw-bold rounded-pill shadow-sm mb-3">
                    <LogIn size={18} className="me-2" /> Sign In
                  </Button>

                  <div className="text-center mt-4">
                    <p className="text-muted small">Don't have an account? <Link to="/register" className="text-primary fw-bold text-decoration-none">Register here</Link></p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
