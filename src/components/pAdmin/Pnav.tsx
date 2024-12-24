import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const Pnav = () => {

  const navigate = useNavigate();

  const handleVenderClick = () => {
    navigate('vendors');
  }

  const handleUsersClick = () => {
    navigate('users');
  }

  const handleHomeClick = () => {
    navigate('/padmin');
  }
  
  const handleProductClick = () => {
    navigate('products');
  }

  const handleDeleteClick = () => {
    navigate('delete');
  }
  

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{width:'50%', textAlign:'center'}}>
          <Nav.Link onClick={()=>handleHomeClick()} >Home</Nav.Link>
            <Nav.Link onClick={()=>handleUsersClick()} >Users</Nav.Link>
            <Nav.Link onClick={()=>handleVenderClick()} >Vendors</Nav.Link>
            <Nav.Link onClick={()=>handleProductClick()} >Products</Nav.Link>
            <Nav.Link onClick={()=>handleDeleteClick()} >Reject Request</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Pnav
