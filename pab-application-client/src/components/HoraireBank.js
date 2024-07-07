import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function HoraireBank() {

    return (
        <div className='horaires'>
            <h4>Horaires</h4>
            <div id="bankTime">
                <ListGroup className='semaine'>
                    <ListGroup.Item>Lundi: 1h - 19h</ListGroup.Item>
                    <ListGroup.Item>Mardi: 8h - 18h</ListGroup.Item>
                    <ListGroup.Item>Mercredi: 8h - 12h</ListGroup.Item>
                    <ListGroup.Item>Jeudi: 18h - 8h</ListGroup.Item>
                    <ListGroup.Item>Vendredi: 19h - 1h</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default HoraireBank;