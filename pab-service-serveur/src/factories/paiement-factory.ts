import { Paiement } from "../interfaces/paiement-interface";
import { PaimentClass } from "../Entities/paiement-entity";
import { Request, Response } from "express";

export class PaiementFactory {
    static exportPaiement = (req: Request, res: Response) => {
        const data: Paiement = PaiementFactory2.createPaiement(req.body.type_de_paiement, req.body.carte_id)
        return data;
    }
}

export class PaiementFactory2 {

    static createPaiement(type_de_paiement: string, carte_id: string) {
        const newPaiement = PaimentClass.getInstance()
        newPaiement.setTypeDePaiement(type_de_paiement)
        newPaiement.setCarteId(carte_id)
        return newPaiement;
    }
}