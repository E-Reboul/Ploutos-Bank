import { Request, Response, request } from "express";

import { pretsEntity } from "../Entities/prets-entity";
import { pretComplete } from "../interfaces/prets-interface";

export class pretFactory {

    public static createPret(request: Request, response: Response): pretsEntity {

    const bodyData = {
        taux: request.body.taux,
        montant: request.body.montant,
        contrat: request.body.contrat,
        nom_du_pret: request.body.nom_du_pret,
        mensualite_restante: new Date(),
        compte_bancaire_id: request.body.compte_bancaire_id,
        compte_bancaire_banque_id: request.body.compte_bancaire_banque_id

    };
    const pretCreate = pretsEntity.getInstance();

    pretCreate.setTaux(bodyData.taux);
    pretCreate.setMontant(bodyData.montant);
    pretCreate.setContrat(bodyData.contrat);
    pretCreate.setNom_pret(bodyData.nom_du_pret);
    pretCreate.setMensualite_restante(bodyData.mensualite_restante)
    pretCreate.setCompte_bancaire_id(bodyData.compte_bancaire_id)
    pretCreate.setBanque_id_compte(bodyData.compte_bancaire_banque_id);
    return pretCreate;
    };

};

