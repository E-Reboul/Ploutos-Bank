import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Navbar2 from './Navbar2';
import { Button } from 'react-bootstrap';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const tokenUser = localStorage.getItem('token');
  const selectedAccountId = localStorage.getItem('selectedAccountId');

  useEffect(() => {
    axios.get(`http://localhost:3000/transaction/one/${selectedAccountId}`, {
      headers: { "Content-Type": "application/json", "Authorization": tokenUser }
    })
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filteredTransactions = transactions.filter(transaction => {
    const matchType = filterType === 'all' || 
                      (filterType === 'expenses' && transaction.somme_transaction < 0) ||
                      (filterType === 'income' && transaction.somme_transaction > 0);

    const matchCategory = filterCategory === 'all' || transaction.type === filterCategory;

    return matchType && matchCategory;
  });

  if (tokenUser) return (
    <section>
      <div>
        <Navbar2 />
      </div>
      <div>
        <Button variant="secondary" onClick={() => setFilterType('all')}>Toutes les transactions</Button>
        <Button variant="secondary" onClick={() => setFilterType('expenses')}>Dépenses</Button>
        <Button variant="secondary" onClick={() => setFilterType('income')}>Revenus</Button>
      </div>
      <div>
        <Button variant="secondary" onClick={() => setFilterCategory('all')}>Toutes les catégories</Button>
        <Button variant="secondary" onClick={() => setFilterCategory('Alimentation')}>Alimentation</Button>
        <Button variant="secondary" onClick={() => setFilterCategory('Impot')}>Impot</Button>
        <Button variant="secondary" onClick={() => setFilterCategory('Travaux')}>Travaux</Button>
        <Button variant="secondary" onClick={() => setFilterCategory('Autre')}>Autre</Button>
        <Button variant="secondary" onClick={() => setFilterCategory('Transport')}>Transport</Button>
        <Button variant="secondary" onClick={() => setFilterCategory('Loisir')}>Loisir</Button>
      </div>
      <Accordion defaultActiveKey="0">
        {filteredTransactions.map((transaction, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{transaction.date_transaction} - {transaction.type}: {transaction.somme_transaction} euros</Accordion.Header>
            <Accordion.Body>
              <p>Date: {transaction.date_transaction}</p>
              <p>Montant: {transaction.somme_transaction} euros</p>
              <p>Etablisssement: {transaction.nom_etablissement}</p>
              <p>Catégorie: {transaction.type}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default Transaction;