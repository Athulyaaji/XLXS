import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>
        <Navbar className="bg-black">
        <Container>
          <Navbar.Brand href="#home">
           
            <i class="fa-brands fa-slack fa-beat fa-xl" style={{color:'white'}}></i>
            <a style={{ textDecoration: 'none',color:'white',fontWeight:'bold',fontFamily:'cursive' }} className='ms-2' >EXCEL SHEET</a>

            
            </Navbar.Brand>
           
        </Container>
      </Navbar>
    </div>
  )
}

export default Header