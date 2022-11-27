import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://graphicsfamily.com/wp-content/uploads/2020/10/Restaurant-logo-design-free-template-scaled.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Tick Away Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header