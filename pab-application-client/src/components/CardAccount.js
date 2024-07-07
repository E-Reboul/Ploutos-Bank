import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function CardAccount() {
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem('token');
  const UserName = localStorage.getItem('username');

  useEffect(() => {
    axios.get(`http://localhost:3000/comptes/one/${UserName}`, {
      headers: { "Content-Type": "application/json", "Authorization": tokenUser }
    })
      .then(response => {
        setAccount(response.data);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const handleCardClick = (id) => {
    localStorage.setItem('selectedAccountId', id);
    navigate("/Accueil");
  }

  if (tokenUser) return (
    <div id="cardContainer" class="mx-auto">
      {account && account.length > 0 ? (
        account.map(account => (
          <Card key={account.id} onClick={() => handleCardClick(account.id)}>
            <Card.Header id="headerCard"> Compte bancaire : </Card.Header>
            <Card.Body id="cardBody">
              <Card.Title hidden>Informations:</Card.Title>
              <Card.Text id="accountCardInfos">
                <p>Type: {account.type_de_compte}</p>
                <p>Banque: {account.nom_banque}</p>
                <p>Titulaire: {account.nom}, {account.prenom}</p>
              </Card.Text>
              <Card.Text id="accountBalance">Solde: {account.solde}€</Card.Text>
            </Card.Body>
          </Card>
                  ))
      ) : (
        <p>Aucun compte trouvé.</p>
      )}
    </div>
  );
}

export default CardAccount;