import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const Vnav = () => {

  const navigate = useNavigate();

  const handleVenderClick = () => {
    navigate('vendors');
  }

  const handleProfileClick = () => {
    navigate('profile');
  }

  const handleHomeClick = () => {
    navigate('/vendor');
  }
  
  const handleProductClick = () => {
    navigate('vproducts');
  }

  const handleAddProductClick = () => {
    navigate('addproduct');
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{width:'35%', textAlign:'center'}}>
            <Nav.Link onClick={()=>handleHomeClick()} >Home</Nav.Link>
            <Nav.Link onClick={()=>handleAddProductClick()} >Add Product</Nav.Link>
            <Nav.Link onClick={()=>handleProductClick()} >Products</Nav.Link>
            <Nav.Link onClick={()=>handleProfileClick()} >Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Vnav
