import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function InputMessage() {
    const tokenUser = localStorage.getItem('token');
    if (tokenUser) return (
        <div id="messageContainer">
            <div className='Message'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Entrez l'adresse de votre conseiller :</Form.Label>
                        <Form.Control type="email" placeholder="exemple@onvousvole.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder='Zone de texte' rows={3} />
                    </Form.Group>
                </Form>

                <Button id="buttonMessage">Envoyer</Button>
            </div>
        </div>
    );
};

export default InputMessage;