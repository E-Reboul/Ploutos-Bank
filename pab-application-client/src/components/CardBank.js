import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Navbar2 from './Navbar2';
import Carte from '../carte.PNG';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/carte.css'

function CardBank() {
  const tokenUser = localStorage.getItem('token');
  const selectedAccountId = localStorage.getItem('selectedAccountId');
  const [cartesBancaires, setCartesBancaires] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/card/one-card/${selectedAccountId}`, {
        headers: { 'Content-Type': 'application/json', Authorization: tokenUser },
      })
      .then((response) => {
        setCartesBancaires(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (tokenUser) return (
    <section>
      <div>
        <Navbar2 />
      </div>
      <div id="containerCarte">
      <Row>
        {cartesBancaires.map((carteBancaire) => (
          <Col>
            <Card key={carteBancaire.id} style={{ width: '20rem' }}>
              <Card.Body className="ClassCarte">
                <Card.Title>Votre Carte</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{carteBancaire.nom_carte}</Card.Subtitle>
                <Card.Text>Date d'expiration: {carteBancaire.date_expiration}</Card.Text>
                <Card.Img variant="top" src={Carte} fluid />
                <Card.Link href="#">Opposition</Card.Link>
                <Card.Link href="#">Modifier le plafond</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </section>
  );
}

export default CardBank;
