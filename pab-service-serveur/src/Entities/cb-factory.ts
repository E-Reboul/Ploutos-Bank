import { CarteBancaire } from "../interfaces/cb-interface";
// Importation de l'interface
import { CardBankClass } from "./cb-entity";
// Importation des entités
import { Request, Response } from "express";
// Importation d'express

export class dataFactory {
    static exportCard = (req: Request, res: Response) => {
        const data = CardBankFactory.createCardBank(req.body.nom_carte, req.body.type_carte, req.body.titulaires, req.body.date_expiration, req.body.contrat,req.body.compte_bancaire_id, req.body.compte_bancaire_banque_id, req.body.compte_bancaire_user_id);
        return data;
    }
}

export class CardBankFactory {
    static createCardBank(nom_carte: string, type_carte: string, titulaires: string, date_expiration: Date, contrat: string, compte_bancaire_id:number, compte_bancaire_banque_id:number, compte_bancaire_user_id:number) {
        const newCard = CardBankClass.getInstance()
        newCard.setNomCarte(nom_carte);
        newCard.setTypeCarte(type_carte);
        newCard.setTitulaires(titulaires)
        newCard.setDateExpiration(date_expiration);
        newCard.setContrat(contrat);
        newCard.setCompte_bancaire_id(compte_bancaire_id);
        newCard.setCompte_bancaire_banque_id(compte_bancaire_banque_id);
        newCard.setCompte_bancaire_user_id(compte_bancaire_user_id);
        return newCard;
    };
};