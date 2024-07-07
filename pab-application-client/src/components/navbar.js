import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'animate.css/animate.min.css'; 
import '../App.css';
import Logo from "../ploutos.png"

function navbar() {
  return (
    
      <Navbar bg="success" data-bs-theme="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="http://localhost:3000" className="animate__animated animate__pulse animate__infinite 	infinite" ><img src={Logo} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000" className="navtext">Comptes</Nav.Link>
            <Nav.Link href="http://localhost:3000/" className="navtext">Espace Client</Nav.Link>
            <Nav.Link href="http://localhost:3000/" className="navtext">Transaction</Nav.Link>
            <Nav.Link href="http://localhost:3000/" className="navtext">Information Personnelle</Nav.Link>
            <Nav.Link href="http://localhost:3000/" className="navtext">Information Carte</Nav.Link>
            <Nav.Link href="http://localhost:3000/document" className="navtext">Documents</Nav.Link>
            <Nav.Link href="http://localhost:3000/" className="navtext">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
      
  );
}
export default navbar;