import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Card, Modal, ToggleButton, ToggleButtonGroup, FloatingLabel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Navbar2 from './Navbar2';
import '../styles/virement.css';

const App = () => {
  const [soldeBanque, setSolde] = useState([]);
  const [afficherComptes, setAfficherComptes] = useState(false);
  const [afficherFormulaireVirement, setAfficherFormulaireVirement] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const UserName = localStorage.getItem('username');
  const tokenUser = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://localhost:3000/comptes/one/${UserName}`, {
      headers: { "Content-Type": "application/json", "Authorization": tokenUser }
    })
      .then(response => {
        setSolde(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [UserName, tokenUser]);

  const handleClickCrediteur = () => {
    setAfficherComptes(true);
    setAfficherFormulaireVirement(false);
  };

  const handleClickVirement = () => {
    setAfficherFormulaireVirement(true);
    setAfficherComptes(false);
  };

  const handleSubmitVirement = (virement) => {
    virement.preventDefault();
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  if (tokenUser) return (
    <section>
      <div>
        <Navbar2 />
      </div>

      <Container className="mt-5 d-flex justify-content-center align-items-center">
        <Card>
          <Card.Body>

            <FloatingLabel
              controlId="floatingInput"
              label="Montant à envoyer"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="0" />
            </FloatingLabel>

            <Button id="button" variant="primary" className="mr-2 typeVirement" onClick={handleClickCrediteur}>
              Vers vos comptes
            </Button>
            <Button id="button" variant="primary" className="mr-2 typeVirement" onClick={handleClickVirement}>
              Virement SEPA
            </Button>

            {afficherComptes && (
              <Row>
              <div id="liste" className="mt-3">
                
                  {soldeBanque && soldeBanque.length > 0 ? (
                    soldeBanque.map(soldeBanque => (
                      <Col>
                        <Card id="virement-card" key={soldeBanque.id}>
                          <Card.Header> Compte bancaire :
                          </Card.Header>
                          <Card.Body id="cardBody">
                            <Card.Title hidden>Informations:</Card.Title>
                            <Card.Text id="soldeBanqueCardInfos">
                              <p>Type: {soldeBanque.type_de_compte}</p>
                              <p>Banque: {soldeBanque.nom_banque}</p>
                              <p>Titulaire: {soldeBanque.nom}, {soldeBanque.prenom}</p>
                            </Card.Text>
                            <div>
                              <ToggleButtonGroup type="checkbox">
                                <ToggleButton className="Button buttonVir" id="tbg-btn-1" value={"Send"}>
                                  Créditeur
                                </ToggleButton>
                                <ToggleButton className="Button buttonVir" id="tbg-btn-2" value={"Receive"}>
                                  Débiteur
                                </ToggleButton>
                              </ToggleButtonGroup>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <p>Aucun compte trouvé.</p>
                  )}   
              </div>
              </Row>
            )}

            {afficherFormulaireVirement && (
              <div className="mt-3">
                <h2>Détails du virement:</h2>
                <Form onSubmit={handleSubmitVirement}>
                  <Form.Group controlId="destinataire">
                    <Form.Label>Destinataire :</Form.Label>
                    <Form.Control type="text" placeholder="Nom du destinataire" />
                  </Form.Group>

                  <Form.Group controlId="montant">
                    <Form.Label>Montant :</Form.Label>
                    <Form.Control type="number" placeholder="Montant du virement" />
                  </Form.Group>

                  <Form.Group controlId="iban">
                    <Form.Label>IBAN :</Form.Label>
                    <Form.Control type="text" placeholder="Numéro IBAN du destinataire" />
                  </Form.Group>

                  <Button type="submit" id="buttonSendVir">
                    Effectuer le virement
                  </Button>
                </Form>
              </div>
            )}

            {/* Modal (pop-up) de Confirmation */}
            <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
              <Modal.Header closeButton>
                <Modal.Title>Virement Effectué</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Le virement a été effectué avec succès. Vérifiez votre compte pour les détails.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseConfirmationModal}>
                  Fermer
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
export default App;