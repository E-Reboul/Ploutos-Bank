import React from "react";
import '../styles/comptes.css';
import CardAccount from "./CardAccount";


function SelectAccount() {
    const tokenUser = localStorage.getItem('token');
    if (tokenUser) return (
        <section>
            <h2 id="titleSelect">Choisir un compte</h2>
            <div>
                <CardAccount />
            </div>
        </section>

    )
}

export default SelectAccount;