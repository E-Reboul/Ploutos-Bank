//vos imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import HoraireBank from './HoraireBank';
import Conseiller from './Conseiller';
import InputMessage from './InputMessage';
import Navbar2 from './Navbar2';
import "../styles/contact.css"

function ContactBank() {
    const [bankInfo, setBankInfo] = useState([]);
    const tokenUser = localStorage.getItem('token');
    useEffect(() => {
        axios.get(`http://localhost:3000/banque/one/1`, { headers: { "Content-Type": "application/json" } })
            .then(response => {
                setBankInfo(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    if (tokenUser) return (
        <section id='contactPage'>
            <div className='contactTitle'>
                <Navbar2 />
                <h1>Contact</h1>
            </div>
            <div id="bankInfoContainer">
                <ListGroup className='bankContact'>
                    {bankInfo.length > 0 && (
                        <>
                            <ListGroup.Item>{bankInfo[0].nom_banque}</ListGroup.Item>
                            <ListGroup.Item>Adresse : {bankInfo[0].adresse}</ListGroup.Item>
                            <ListGroup.Item>Téléphone : {bankInfo[0].numero_telephone}</ListGroup.Item>
                            <ListGroup.Item>Email : {bankInfo[0].email}</ListGroup.Item>
                        </>
                    )}
                </ListGroup>
            </div>
            <HoraireBank />
            <Conseiller />
            <InputMessage />
        </section>
    );
};
export default ContactBank;