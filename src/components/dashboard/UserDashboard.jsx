import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Button, ListGroup, Badge, Alert, Form } from 'react-bootstrap';
import { QRCodeSVG } from 'qrcode.react';
import { User, FileText, Calendar, QrCode, ShieldCheck, Upload, CheckCircle, Clock, Heart, Gift } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const fileInputRef = React.useRef(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  
  // Mock user data state
  const [userData, setUserData] = useState({
    brideName: "Priya Sharma",
    groomName: "Rahul Verma",
    currentUserName: "Loading...",
    partnerName: "Loading...",
    registrationId: "VV-2026-0421",
    status: "DOCUMENT_PENDING", 
    documents: [
      { id: 'aadhaar', label: "Aadhaar Card (Combined)", status: "PENDING" },
      { id: 'age', label: "Age Proof (Birth Cert / School LC)", status: "UPLOADED" },
      { id: 'income', label: "Income Certificate", status: "PENDING" },
      { id: 'caste', label: "Caste Certificate", status: "PENDING" }
    ],
    event: {
      name: "Maharashtra State Samuhik Vivah 2026",
      date: "May 15, 2026",
      venue: "BKC Ground, Mumbai"
    },
    gifts: []
  });

  // Load real-time user info on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      let current = "";
      let partner = "";

      // Use actual names from the login response if available
      if (parsedUser.role === 'BRIDE') {
        current = parsedUser.brideName || parsedUser.username;
        partner = parsedUser.groomName || "Not Assigned";
      } else if (parsedUser.role === 'GROOM') {
        current = parsedUser.groomName || parsedUser.username;
        partner = parsedUser.brideName || "Not Assigned";
      } else {
        current = parsedUser.username;
        partner = "N/A";
      }

      setUserData(prev => ({
        ...prev,
        currentUserName: current,
        partnerName: partner,
        brideName: parsedUser.brideName || prev.brideName,
        groomName: parsedUser.groomName || prev.groomName,
        status: parsedUser.verificationStatus || prev.status,
        qrCodeData: parsedUser.qrCodeData,
        isVerified: parsedUser.verified,
        assignedVenue: parsedUser.assignedVenue,
        hallNumber: parsedUser.hallNumber,
        ceremonyTime: parsedUser.ceremonyTime,
        allocatedScheme: parsedUser.allocatedScheme,
        profilePicture: parsedUser.profilePicture || "https://i.pravatar.cc/150",
        gifts: parsedUser.gifts || []
      }));
    }
  }, []);

  const handleUploadClick = (docId) => {
    setSelectedDoc(docId);
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && selectedDoc) {
      if (selectedDoc === 'profilePic') {
        // Mock profile picture update
        const reader = new FileReader();
        reader.onload = (upload) => {
          setUserData(prev => ({ ...prev, profilePicture: upload.target.result }));
        };
        reader.readAsDataURL(file);
      } else {
        // Mock document upload logic
        const updatedDocs = userData.documents.map(doc => 
          doc.id === selectedDoc ? { ...doc, status: 'UPLOADED' } : doc
        );
        setUserData({ ...userData, documents: updatedDocs });
        alert(`${file.name} uploaded successfully for ${selectedDoc}!`);
      }
    }
  };

  return (
    <div className="dashboard-page bg-light py-4" style={{ minHeight: '90vh' }}>
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />
      <Container>
        <Row className="mb-4">
          <Col>
            <div className="d-flex align-items-center justify-content-between bg-white p-4 rounded-4 shadow-sm">
              <div className="d-flex align-items-center">
                <div className="position-relative me-3">
                  <img 
                    src={userData.profilePicture} 
                    alt="Profile" 
                    className="rounded-circle shadow-sm border border-3 border-white"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="position-absolute bottom-0 end-0 rounded-circle p-1"
                    onClick={() => handleUploadClick('profilePic')}
                    style={{ width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Upload size={12} />
                  </Button>
                </div>
                <div>
                  <h4 className="fw-bold mb-1">Welcome, {userData.currentUserName}</h4>
                  <p className="text-muted mb-0 small">
                    <Heart size={14} className="text-danger me-1" fill="currentColor"/> 
                    Partner: <span className="fw-bold">{userData.partnerName}</span> | Reg ID: {userData.registrationId}
                  </p>
                </div>
              </div>
              <Badge bg={userData.status === 'APPROVED' ? 'success' : (userData.status === 'REJECTED' ? 'danger' : 'warning')} className="px-3 py-2 rounded-pill">
                {userData.status.replace('_', ' ')}
              </Badge>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3} className="mb-4">
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="p-0">
                <Nav variant="pills" className="flex-column p-2" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                  <Nav.Item className="mb-1">
                    <Nav.Link eventKey="profile" className="d-flex align-items-center gap-3 py-3 rounded-3">
                      <User size={18} /> My Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-1">
                    <Nav.Link eventKey="documents" className="d-flex align-items-center gap-3 py-3 rounded-3">
                      <FileText size={18} /> Documents
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-1">
                    <Nav.Link eventKey="event" className="d-flex align-items-center gap-3 py-3 rounded-3">
                      <Calendar size={18} /> Event Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mb-1">
                    <Nav.Link eventKey="qr" className="d-flex align-items-center gap-3 py-3 rounded-3">
                      <QrCode size={18} /> QR Entry Pass
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="gifts" className="d-flex align-items-center gap-3 py-3 rounded-3">
                      <ShieldCheck size={18} /> Welfare & Gifts
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={9}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4 p-lg-5">
                {activeTab === 'profile' && (
                  <div className="tab-profile">
                    <h4 className="fw-bold mb-4">Account Profile</h4>
                    <Row>
                      <Col md={6} className="mb-4">
                        <label className="text-muted small d-block mb-1">Bride Name</label>
                        <p className="fw-medium border-bottom pb-2">{userData.brideName}</p>
                      </Col>
                      <Col md={6} className="mb-4">
                        <label className="text-muted small d-block mb-1">Groom Name</label>
                        <p className="fw-medium border-bottom pb-2">{userData.groomName}</p>
                      </Col>
                      <Col md={6} className="mb-4">
                        <label className="text-muted small d-block mb-1">Social Category</label>
                        <p className="fw-medium border-bottom pb-2">OBC</p>
                      </Col>
                      <Col md={6} className="mb-4">
                        <label className="text-muted small d-block mb-1">Contact</label>
                        <p className="fw-medium border-bottom pb-2">+91 98765 43210</p>
                      </Col>
                    </Row>
                    <Button variant="outline-primary" className="rounded-pill px-4">Edit Profile</Button>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="tab-documents">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="fw-bold mb-0">Required Documents</h4>
                      <Badge bg="info">Mandatory for Verification</Badge>
                    </div>
                    
                    <Alert variant="warning" className="border-0 rounded-4 mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <Clock size={20} />
                        <span>Please upload all documents to start the verification process.</span>
                      </div>
                    </Alert>

                    <ListGroup variant="flush">
                      {userData.documents.map((doc, i) => (
                        <ListGroup.Item key={i} className="d-flex align-items-center justify-content-between py-3 border-light px-0">
                          <div className="d-flex align-items-center gap-3">
                            <div className={`p-2 rounded-3 ${doc.status === 'UPLOADED' ? 'bg-success-subtle text-success' : 'bg-light text-muted'}`}>
                              <FileText size={20} />
                            </div>
                            <span>{doc.label}</span>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            {doc.status === 'UPLOADED' ? (
                              <div className="d-flex align-items-center gap-2">
                                <Badge bg="success-subtle" className="text-success border border-success">Uploaded</Badge>
                                <Button variant="link" size="sm" onClick={() => handleUploadClick(doc.id)} className="text-primary p-0">Change</Button>
                              </div>
                            ) : (
                              <Button variant="light" size="sm" className="d-flex align-items-center gap-2" onClick={() => handleUploadClick(doc.id)}>
                                <Upload size={14} /> Upload
                              </Button>
                            )}
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                )}

                {activeTab === 'qr' && (
                  <div className="tab-qr text-center">
                    <h4 className="fw-bold mb-2">Your Entry Pass</h4>
                    <p className="text-muted mb-5">Scan this QR code at the venue for verification</p>
                    
                    {userData.isVerified ? (
                      <div className="qr-container bg-white p-4 d-inline-block rounded-4 shadow-sm border border-4 border-primary mb-4">
                        <QRCodeSVG value={userData.qrCodeData} size={256} />
                        <div className="mt-3 text-start px-3">
                          <p className="mb-1"><strong>Venue:</strong> {userData.assignedVenue}</p>
                          <p className="mb-1"><strong>Hall:</strong> {userData.hallNumber}</p>
                          <p className="mb-1"><strong>Time:</strong> {userData.ceremonyTime}</p>
                          <p className="mb-0 text-success"><strong>Scheme:</strong> {userData.allocatedScheme}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="py-5">
                        <Alert variant="info" className="border-0 rounded-4">
                          <h5 className="fw-bold">QR Code Not Ready</h5>
                          <p className="mb-0">Your QR code pass will be generated once your documents are fully verified and venue is allocated by the administration.</p>
                        </Alert>
                        <div className="opacity-25 mt-4">
                           <QrCode size={120} className="mx-auto" />
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <Button variant="primary" className="rounded-pill px-5" disabled={!userData.isVerified}>
                        Download Pass (PDF)
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === 'event' && (
                  <div className="tab-event text-center">
                     <div className="bg-danger text-white p-5 rounded-4 mb-4 shadow-sm">
                        <Calendar size={48} className="mb-3" />
                        <h2 className="fw-bold">{userData.event.name}</h2>
                        <h4 className="mb-0">{userData.event.date}</h4>
                     </div>
                     <Row>
                        <Col md={12}>
                           <Card className="bg-light border-0 rounded-4 p-4 text-start">
                              <h5 className="fw-bold mb-3">Your Allocation Details</h5>
                              {userData.isVerified ? (
                                <div className="mb-4">
                                  <p className="mb-2"><strong>Venue:</strong> {userData.assignedVenue}</p>
                                  <p className="mb-2"><strong>Hall/Section:</strong> {userData.hallNumber}</p>
                                  <p className="mb-0"><strong>Ceremony Time:</strong> {userData.ceremonyTime}</p>
                                </div>
                              ) : (
                                <Alert variant="warning" className="small">Waiting for admin to verify documents and allocate your hall.</Alert>
                              )}
                              
                              <h5 className="fw-bold mb-3 mt-4">General Instructions</h5>
                              <ul className="text-muted small">
                                 <li>Arrive at the venue at least 2 hours before the ceremony.</li>
                                 <li>Carry your original Aadhaar card for physical verification.</li>
                                 <li>Keep your digital QR pass ready on your phone.</li>
                                 <li>Each couple is allowed 4 family members as guests.</li>
                              </ul>
                           </Card>
                        </Col>
                     </Row>
                  </div>
                )}

                {activeTab === 'gifts' && (
                  <div className="tab-gifts">
                    <h4 className="fw-bold mb-4">Welfare & Wedding Gifts</h4>
                    
                    <Card className="bg-success-subtle border-0 rounded-4 p-4 mb-4">
                       <div className="d-flex align-items-center gap-3">
                          <div className="bg-success text-white p-3 rounded-circle"><ShieldCheck size={24}/></div>
                          <div>
                             <h5 className="fw-bold mb-1 text-success">Allocated Scheme</h5>
                             <p className="mb-0 fw-medium">{userData.allocatedScheme || "Pending Allocation"}</p>
                          </div>
                       </div>
                    </Card>

                    <h5 className="fw-bold mb-3">Gift Distribution Status</h5>
                    {userData.gifts.length > 0 ? (
                      <ListGroup variant="flush">
                        {userData.gifts.map((gift, i) => (
                          <ListGroup.Item key={i} className="d-flex align-items-center justify-content-between py-3 px-0 border-light bg-transparent">
                             <div className="d-flex align-items-center gap-3">
                                <div className="bg-white p-2 rounded-3 shadow-sm text-primary"><Gift size={20}/></div>
                                <div>
                                   <p className="mb-0 fw-bold">{gift.giftName}</p>
                                   <small className="text-muted">Source: {gift.source}</small>
                                </div>
                             </div>
                             <Badge bg={gift.distributedStatus ? 'success' : 'info'} className="rounded-pill px-3">
                                {gift.distributedStatus ? 'Collected' : 'To be Collected'}
                             </Badge>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    ) : (
                      <div className="text-center py-5 bg-light rounded-4">
                         <Gift size={48} className="text-muted mb-3 opacity-25" />
                         <p className="text-muted">No gifts have been allocated to your profile yet.</p>
                      </div>
                    )}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;
