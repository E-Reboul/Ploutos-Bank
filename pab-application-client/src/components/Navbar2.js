import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../ploutos.png';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import "../styles/navbar.css"

function Navbar2() {
    const navigate = useNavigate();
    const handleDisconnectClick = () => {
        localStorage.removeItem('selectedAccountId');
        localStorage.removeItem('username');
        localStorage.clear();
        navigate("/");
    };

    const confirmDisconnect = () => {
        const userWantsToDisconnect = window.confirm("Voulez-vous vraiment vous déconnecter ?");

        if (userWantsToDisconnect) {
            handleDisconnectClick();
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            confirmDisconnect();
        }, 900000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbarColor" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="http://localhost:3001/Accueil">
                    <img src={Logo} alt="Tête sculptée du Dieu grec Ploutos intégrée à son initial." width={80} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navLink" href="http://localhost:3001/scount">Comptes</Nav.Link>
                        <Nav.Link className="navLink" href="http://localhost:3001/contact">Contact</Nav.Link>
                        <Nav.Link className="navLink" href="http://localhost:3001/transaction">Vos transactions</Nav.Link>
                        <Nav.Link className="navLink" href="http://localhost:3001/infos">Vos informations</Nav.Link>
                        <Nav.Link className="navLink" href="http://localhost:3001/cards">Vos cartes</Nav.Link>
                        <Nav.Link className="navLink" href="http://localhost:3001/document">Vos documents</Nav.Link>
                        <Nav.Link className="navLink" href="http://localhost:3001/virement">Faire un virement</Nav.Link>
                        <Nav.Link className="navLink" onClick={() => confirmDisconnect()}>Se déconnecter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar2;