import { BanqueClass } from "../Entities/banque-entity";
import { Request, Response } from "express"

export class BanqueFactory {
    static exportBanque = (req: Request, res: Response) => {
        const data = BanqueFactory2.createBanque(req.body.nom_banque, req.body.numero_guichet, req.body.numero_telephone, req.body.email, req.body.adresse)
        return data;
    }
}

export class BanqueFactory2 {

    static createBanque(nom_banque: string, numero_guichet: number, numero_telephone: number, email: string, adresse: string) {
        

        const newBanque = BanqueClass.getInstance();
        newBanque.setNomBanque(nom_banque);
        newBanque.setNumeroGuichet(numero_guichet);
        newBanque.setNumeroTelephone(numero_telephone);
        newBanque.setEmail(email);
        newBanque.setAdresse(adresse);
        return newBanque;
    }
}
