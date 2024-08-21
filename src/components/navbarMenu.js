import React from 'react'
import {Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
function navbarMenu() {

  return (
    <div className='container'>
      <Navbar  expand="lg">
        <Navbar.Brand href="#home">
         My Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link"><Link to="/home"><FontAwesomeIcon icon={faHome} color='orange' marginRight="4px" /> Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Create"> <FontAwesomeIcon icon={faPlus} color='orange' marginRight="4px" /> Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Search"> <FontAwesomeIcon icon={faSearch} color='orange' marginRight="4px" /> Search</Link></Nav.Link>
            {
              localStorage.getItem('login') ?
                <Nav.Link href="#link"><Link to="/Logout"> <FontAwesomeIcon icon={faUser} color='orange'  marginRight="4px"/> LogOut</Link></Nav.Link>

                :
                <Nav.Link href="#link"><Link to="/"> <FontAwesomeIcon icon={faUser} color='orange' marginRight="4px" /> Login</Link></Nav.Link>



            }
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navbarMenu