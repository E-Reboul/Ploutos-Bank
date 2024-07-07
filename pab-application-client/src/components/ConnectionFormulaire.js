//C'est le components pour le formulaire de connexion.

// Importation des composants nécessaires depuis React et react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'; // Sert à faire des requetes.
import { useNavigate } from 'react-router-dom';
import '../styles/connection.css';

// Définition du composant de formulaire de connexion
function ConnectionFormulaire() {
    // Déclaration des variables d'état pour le nom d'utilisateur et le mot de passe
    // En React, le state est utilisé pour stocker et gérer les données qui peuvent changer au fil du temps. 
    // Il permet de rendre dynamiques les composants en réagissant aux événements, aux entrées de l'utilisateur, ou à tout autre facteur qui peut entraîner un changement dans l'interface utilisateur. 
    // La fonction useState renvoie un tableau avec deux éléments : la première valeur est la variable d'état elle-même, et la seconde est une fonction pour mettre à jour cette variable.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Fonctions pour mettre à jour les variables d'état lors des changements dans les champs de saisie
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Utilisation du "hook useNavigate" pour la navigation dans l'application, c'est à dire le changement de page
    const navigate = useNavigate();

    // Rendu du formulaire de connexion avec React-bootstrap
    return (
        <Form id='LoadingHome'>
            {/* Champ de saisie pour le nom d'utilisateur */}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Identifiant</Form.Label>
                <Form.Control type="text" placeholder="Renseignez votre identifiant" value={username} onChange={handleUsernameChange} />
            </Form.Group>

            {/* Champ de saisie pour le mot de passe */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Renseignez votre mot de passe" value={password} onChange={handlePasswordChange} />
                <Form.Text className="text-muted">
                    Rappel : Nous ne vous demanderons jamais votre mot de passe.
                </Form.Text>
            </Form.Group>

            {/* Case à cocher pour se souvenir de l'utilisateur */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group>

            {/* Bouton de soumission du formulaire */}
            <Button className="buttonConnected" type="submit" onClick={(event) => {
                event.preventDefault();
                // Requête Axios pour la connexion de l'utilisateur
                axios.post(
                    'http://localhost:3000/users/loginU',
                    JSON.stringify({ 'identifiant': username, 'password': password }),
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then(response => {
                        // Stockage du token et du nom d'utilisateur dans le stockage local
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("username", username);
                        // Navigation vers la page "/souffrance"
                        navigate("/scount");
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }}>
                Se connecter
            </Button>
        </Form>
    );
}

// Exportation du composant ConnectionFormulaire
export default ConnectionFormulaire;
