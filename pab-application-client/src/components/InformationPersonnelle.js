import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar2';
import { Button, Modal, Form } from 'react-bootstrap';
import '../styles/informationPersonnelle.css'

function InformationPersonnelle() {
    const [userInfo, setUserInfo] = useState([]);
    const tokenUser = localStorage.getItem('token');
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [modifiedInfo, setModifiedInfo] = useState({
        nom: '',
        prenom: '',
        numero_telephone: '',
        email: '',
        etat: '',
        role: '',
        identifiant: ''
    });
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        axios.get(
            'http://localhost:3000/users/one/1', { headers: { "Content-Type": "application/json", "Authorization": tokenUser } }
        )
            .then(response => {
                setUserInfo(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, []);

    const handleOpenInfoModal = () => {
        setModifiedInfo({
            nom: userInfo[0].nom,
            prenom: userInfo[0].prenom,
            numero_telephone: userInfo[0].numero_telephone,
            email: userInfo[0].email,
            password: "root",
            etat: userInfo[0].etat,
            role: userInfo[0].role,
            identifiant: userInfo[0].identifiant,
        });

    console.log(modifiedInfo)
        setShowInfoModal(true);
    };

    const handleCloseInfoModal = () => setShowInfoModal(false);

    const handleOpenPasswordModal = () => setShowPasswordModal(true);
    const handleClosePasswordModal = () => setShowPasswordModal(false);

    const handleInfoInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedInfo({ ...modifiedInfo, [name]: value });
    };

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleInfoFormSubmit = () => {
        axios.put(`http://localhost:3000/users/update/${userInfo[0].id}`, modifiedInfo)
            .then(response => {
                console.log(response.data);
                handleCloseInfoModal();
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handlePasswordFormSubmit = () => {
        handleClosePasswordModal();
    };

   if(tokenUser) return (
        <section id="bodyInfoContainer">
            <div>
                <Navbar2 />
            </div>
            <div id="infoContainer">
                {userInfo.length > 0 && (
                    <>
                        <h2 id="titleUserInfo">Informations Personnelles</h2>
                        <div id="userName">
                            <p>Nom : {userInfo[0].nom}</p>
                            <p>Prénom : {userInfo[0].prenom}</p>
                        </div>
                        <div id="userCoord">
                            <p>Telephone : {userInfo[0].numero_telephone}</p>
                            <p>Email : {userInfo[0].email}</p>
                        </div>
                        <div id="updateInfos">
                            <Button className='buttonAccueil' onClick={handleOpenInfoModal}>Modifier vos informations</Button>
                            <Button className='buttonAccueil' onClick={handleOpenPasswordModal}>Modifier votre mot de passe</Button>
                            <p id="assist">Numero d'Assistance En Ligne: 040404050</p>
                        </div>
                    </>
                )}
            </div>
            <Modal show={showInfoModal} onHide={handleCloseInfoModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier vos informations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                name="nom"
                                value={modifiedInfo.nom}
                                onChange={handleInfoInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrenom">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control
                                type="text"
                                name="prenom"
                                value={modifiedInfo.prenom}
                                onChange={handleInfoInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTelephone">
                            <Form.Label>Téléphone</Form.Label>
                            <Form.Control
                                type="text"
                                name="numero_telephone"
                                value={modifiedInfo.numero_telephone}
                                onChange={handleInfoInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={modifiedInfo.email}
                                onChange={handleInfoInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='buttonAccueil' variant="secondary" onClick={handleCloseInfoModal}>
                        Annuler
                    </Button>
                    <Button className='buttonAccueil' variant="primary" onClick={handleInfoFormSubmit}>
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showPasswordModal} onHide={handleClosePasswordModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier votre mot de passe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Nouveau mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                value={newPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='updateInfoUser' onClick={handleClosePasswordModal}>
                        Annuler
                    </Button>
                    <Button className='updatePassword' variant="primary" onClick={handlePasswordFormSubmit}>
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default InformationPersonnelle;
