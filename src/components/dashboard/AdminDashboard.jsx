import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Nav, Modal, Form } from 'react-bootstrap';
import { Users, FileCheck, MapPin, PieChart, Coins, Gift, Bell, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('verification');
  const [applications, setApplications] = useState([]);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [verifyData, setVerifyData] = useState({
    status: 'APPROVED',
    venue: 'BKC Grand Ground',
    hall: 'Hall A-1',
    time: '10:00 AM',
    scheme: 'Kanyadan Yojana (General)'
  });

  const [searchTerm, setSearchName] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/applications');
      setApplications(response.data);
    } catch (err) {
      console.error("Fetch apps error:", err);
    }
  };

  const filteredApps = applications.filter(app => 
    app.brideName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.groomName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Analytics Helpers
  const getCategoryCount = (cat) => applications.filter(a => a.category === cat).length;
  const categories = ['OPEN', 'OBC', 'SC', 'ST'];

  const handleVerifySubmit = async () => {
    try {
      await axios.post(`http://localhost:8080/api/admin/verify/${selectedApp.id}`, verifyData);
      setShowVerifyModal(false);
      fetchApplications();
      alert("Application status updated successfully!");
    } catch (err) {
      console.error("Verify error:", err);
      alert("Failed to update status.");
    }
  };

  const openVerifyModal = (app) => {
    setSelectedApp(app);
    setShowVerifyModal(true);
  };

  return (
    <div className="admin-dashboard bg-light py-4" style={{ minHeight: '90vh' }}>
      <Container fluid className="px-lg-5">
        <Row className="mb-4">
          <Col md={8}>
            <h3 className="fw-bold text-primary">Admin Control Center</h3>
            <p className="text-muted">Manage registrations, venues, and event logistics</p>
          </Col>
          <Col md={4} className="text-md-end">
             <div className="d-flex gap-2 justify-content-md-end">
                <Form.Control 
                  type="text" 
                  placeholder="Search couples or category..." 
                  className="rounded-pill px-3 shadow-sm border-0" 
                  style={{ maxWidth: '250px' }}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <Button variant="primary" className="rounded-circle shadow-sm" onClick={fetchApplications}>
                   <Bell size={18}/>
                </Button>
             </div>
          </Col>
        </Row>

        <Row className="mb-4 g-3">
          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle p-3 rounded-circle text-primary"><Users size={24}/></div>
                <div><h4 className="fw-bold mb-0">{applications.length}</h4><p className="text-muted small mb-0">Total Couples</p></div>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-warning-subtle p-3 rounded-circle text-warning"><FileCheck size={24}/></div>
                <div><h4 className="fw-bold mb-0">{applications.filter(a => a.verificationStatus === 'PENDING').length}</h4><p className="text-muted small mb-0">Pending Verification</p></div>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success-subtle p-3 rounded-circle text-success"><CheckCircle size={24}/></div>
                <div><h4 className="fw-bold mb-0">{applications.filter(a => a.verified).length}</h4><p className="text-muted small mb-0">Verified & Allocated</p></div>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-info-subtle p-3 rounded-circle text-info"><MapPin size={24}/></div>
                <div><h4 className="fw-bold mb-0">12</h4><p className="text-muted small mb-0">Venues Active</p></div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={2} className="mb-4">
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
               <Nav variant="pills" className="flex-column p-2" activeKey={activeTab} onSelect={k => setActiveTab(k)}>
                  <Nav.Link eventKey="verification" className="d-flex align-items-center gap-2 py-3 rounded-3"><FileCheck size={18}/> Verification</Nav.Link>
                  <Nav.Link eventKey="couples" className="d-flex align-items-center gap-2 py-3 rounded-3"><Users size={18}/> Couples List</Nav.Link>
                  <Nav.Link eventKey="overview" className="d-flex align-items-center gap-2 py-3 rounded-3"><PieChart size={18}/> Analytics</Nav.Link>
               </Nav>
            </Card>
          </Col>
          
          <Col lg={10}>
            <Card className="border-0 shadow-sm rounded-4 p-4">
               {activeTab === 'verification' && (
                 <div>
                    <h4 className="fw-bold mb-4">Application Review Queue</h4>
                    <Table responsive hover className="align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th>ID</th>
                          <th>Couple Name</th>
                          <th>Category</th>
                          <th>Contact</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.filter(a => a.verificationStatus === 'PENDING').map((app, i) => (
                          <tr key={i}>
                            <td className="fw-bold">VV-{app.id}</td>
                            <td>{app.brideName} & {app.groomName}</td>
                            <td><Badge bg="secondary">{app.category}</Badge></td>
                            <td>{app.contactNumber}</td>
                            <td><Badge bg="warning">PENDING</Badge></td>
                            <td>
                              <Button variant="primary" size="sm" className="rounded-pill" onClick={() => openVerifyModal(app)}>
                                Review & Allocate
                              </Button>
                            </td>
                          </tr>
                        ))}
                        {applications.filter(a => a.verificationStatus === 'PENDING').length === 0 && (
                          <tr><td colSpan="6" className="text-center py-4 text-muted">No pending applications found.</td></tr>
                        )}
                      </tbody>
                    </Table>
                 </div>
               )}

               {activeTab === 'couples' && (
                 <div>
                    <h4 className="fw-bold mb-4">Master Couple Directory</h4>
                    <Table responsive hover className="align-middle">
                      <thead className="bg-light">
                        <tr>
                          <th>ID</th>
                          <th>Bride Name</th>
                          <th>Groom Name</th>
                          <th>Category</th>
                          <th>Assigned Venue</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredApps.map((app, i) => (
                          <tr key={i}>
                            <td className="fw-bold">VV-{app.id}</td>
                            <td>{app.brideName}</td>
                            <td>{app.groomName}</td>
                            <td><Badge bg="info-subtle" className="text-info">{app.category}</Badge></td>
                            <td>{app.assignedVenue || "Not Assigned"}</td>
                            <td>
                              <Badge bg={app.verified ? 'success' : 'secondary'}>
                                {app.verified ? 'VERIFIED' : 'UNVERIFIED'}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                 </div>
               )}

               {activeTab === 'overview' && (
                 <div>
                    <h4 className="fw-bold mb-4">System Analytics & Statistics</h4>
                    <Row className="g-4">
                       <Col md={6}>
                          <Card className="border p-4 rounded-4 h-100 bg-white">
                             <h6 className="fw-bold text-muted mb-4 d-flex align-items-center gap-2"><Users size={18}/> Category Distribution</h6>
                             {categories.map(cat => {
                               const count = getCategoryCount(cat);
                               const pct = applications.length > 0 ? (count / applications.length) * 100 : 0;
                               return (
                                 <div key={cat} className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                       <span className="small fw-bold">{cat}</span>
                                       <span className="small text-muted">{count} Couples</span>
                                    </div>
                                    <div className="progress" style={{ height: '8px' }}>
                                       <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                                    </div>
                                 </div>
                               )
                             })}
                          </Card>
                       </Col>
                       <Col md={6}>
                          <Row className="g-3">
                             <Col md={6}>
                                <Card className="border p-4 rounded-4 text-center">
                                   <h2 className="fw-bold text-success mb-1">{applications.filter(a => a.verified).length}</h2>
                                   <p className="text-muted small mb-0">Ready for Marriage</p>
                                </Card>
                             </Col>
                             <Col md={6}>
                                <Card className="border p-4 rounded-4 text-center">
                                   <h2 className="fw-bold text-danger mb-1">{applications.filter(a => a.verificationStatus === 'REJECTED').length}</h2>
                                   <p className="text-muted small mb-0">Rejected Apps</p>
                                </Card>
                             </Col>
                             <Col md={12}>
                                <Card className="border p-4 rounded-4 bg-primary-subtle border-primary-subtle">
                                   <h6 className="fw-bold mb-2">Registration Efficiency</h6>
                                   <p className="small mb-0">The system is currently handling <strong>{applications.length}</strong> active profiles with a verification rate of <strong>{applications.length > 0 ? Math.round((applications.filter(a => a.verified).length / applications.length) * 100) : 0}%</strong>.</p>
                                </Card>
                             </Col>
                          </Row>
                       </Col>
                    </Row>
                 </div>
               )}
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Verification & Allocation Modal */}
      <Modal show={showVerifyModal} onHide={() => setShowVerifyModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Review Application: VV-{selectedApp?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Decision</Form.Label>
              <Form.Select value={verifyData.status} onChange={e => setVerifyData({...verifyData, status: e.target.value})}>
                <option value="APPROVED">Approve & Allocate Venue</option>
                <option value="REJECTED">Reject Application</option>
                <option value="PENDING">Keep Pending</option>
              </Form.Select>
            </Form.Group>
            
            {verifyData.status === 'APPROVED' && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Assign Venue</Form.Label>
                  <Form.Control type="text" value={verifyData.venue} onChange={e => setVerifyData({...verifyData, venue: e.target.value})} />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Hall Number</Form.Label>
                      <Form.Control type="text" value={verifyData.hall} onChange={e => setVerifyData({...verifyData, hall: e.target.value})} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Ceremony Time</Form.Label>
                      <Form.Control type="text" value={verifyData.time} onChange={e => setVerifyData({...verifyData, time: e.target.value})} />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Govt Scheme Allocation</Form.Label>
                  <Form.Select value={verifyData.scheme} onChange={e => setVerifyData({...verifyData, scheme: e.target.value})}>
                    <option value="Kanyadan Yojana (General)">Kanyadan Yojana (General)</option>
                    <option value="SC/ST Welfare Grant">SC/ST Welfare Grant</option>
                    <option value="OBC Special Wedding Kit">OBC Special Wedding Kit</option>
                    <option value="Minority Community Support">Minority Community Support</option>
                  </Form.Select>
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowVerifyModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleVerifySubmit}>Save Decision</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
