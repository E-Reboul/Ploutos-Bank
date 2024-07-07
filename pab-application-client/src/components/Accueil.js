import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Figure } from "react-bootstrap";
import Logo from "../ploutos.png"
import '../styles/accueil.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Navbar2 from './Navbar2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Accueil() {
    const tokenUser = localStorage.getItem('token');
    const UserName = localStorage.getItem('username');
    const selectedAccountId = localStorage.getItem('selectedAccountId');
    const [soldeBanque, setSoldeBanque] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/comptes/one/${UserName}`, {
            headers: { "Content-Type": "application/json", "Authorization": tokenUser }
        })
            .then(response => {
                const foundAccount = response.data.find(account => account.id === parseInt(selectedAccountId, 10));
                setSoldeBanque(foundAccount ? [foundAccount] : []);
            })
            .catch(error => {
                console.error(error);
            });
    }, [selectedAccountId]);

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

    const totalAlimentation = transactions
        .filter(transaction => transaction.depenses_revenus_id === 1)
        .reduce((total, transaction) => total + Math.abs(transaction.somme_transaction), 0);

    const totalImpots = transactions
        .filter(transaction => transaction.depenses_revenus_id === 2)
        .reduce((total, transaction) => total + Math.abs(transaction.somme_transaction), 0);

    const totalTravaux = transactions
        .filter(transaction => transaction.depenses_revenus_id === 3)
        .reduce((total, transaction) => total + Math.abs(transaction.somme_transaction), 0);

    const data = {
        labels: ['Alimentation', 'Impots', 'Travaux'],
        datasets: [
            {
                label: ['% de dépense'],
                data: [totalAlimentation, totalImpots, totalTravaux],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    if (tokenUser) return (
        <section>
            <div>
                <Navbar2/>
            </div>
            <div>
                <Figure>
                    <Figure.Image
                        width={180}
                        height={180}
                        alt="171x180"
                        src={Logo}
                    />
                    <Figure.Caption>
                        "Gardien de votre héritage, architecte de votre prestige"
                    </Figure.Caption>
                </Figure>
            </div>
            <div>
                <div id="soldAccueil">
                    {soldeBanque.length > 0 ? (
                        <p className='CompteSolde'>{soldeBanque[0].type_de_compte}: {soldeBanque[0].solde} euros</p>
                    ) : (
                        <p>Aucun solde disponible</p>
                    )}
                </div>
            </div>
            <div id="graphButton">
                <Button className='buttonAccueil' href='http://localhost:3001/transaction'>Transactions passées</Button>
                <Button className='buttonAccueil' href='http://localhost:3001/transaction'>Transactions futures</Button>
                <Button className='buttonAccueil' href='http://localhost:3001/transaction'>Transactions rejetées</Button>
            </div>
            <div id="graphContainer">
                <p>Vos dépenses du mois :</p>
            </div>
            <div id="graph">
                <Doughnut data={data} width={"100%"} options={{ maintainAspectRatio: false }} />
            </div>
        </section>
    )
}
export default Accueil;