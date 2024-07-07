// Ici c'est un peu l'équivalent du server.js et du routes.js

import 'animate.css/animate.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import Virement from './components/Virement';
import Accueil from './components/Accueil';
import ConnectionBar from './components/ConnectionBar';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Document from './components/Document';
import ContactBank from "./components/ContactBank";
import HoraireBank from './components/HoraireBank';
import SelectAccount from "./components/SelectAccound"
import InformationPersonnelle from './components/InformationPersonnelle';
import Transaction from './components/Transactions'
import CardBank from './components/CardBank';



//ON CREE LES ROUTES ICI
const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
  },
  {
    path: "/souffrance", //CECI est un exemple de route
    element :  <ConnectionBar/> // Cette route fera appel à cet element qu'on trouve dans Components
  },
  {
    path: "/document",
    element :  <Document/>
  },
  {
    path: "/contact",
    element: <ContactBank/>
  },
  {
    path: "/virement",
    element : <Virement/>,
  },
  {
    path: "/Accueil", 
    element :  <Accueil/> 
  },
  {
    path: "/scount", 
    element :  <SelectAccount/>
  },
  {
    path: "/infos", 
    element :  <InformationPersonnelle/>
  },
  {
    path: "/transaction", 
    element :  <Transaction/>
  },
  {
    path: "/cards", 
    element :  <CardBank/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
