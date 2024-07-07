import { CompteBancaireInterface } from "../interfaces/compte-bancaire-interface";
import { CompteBancaireClass } from "../Entities/compte-bancaire-entity"
import { Request, Response } from "express"

export class CompteBancaireFactory {
  static exportCompteBancaire = (req: Request, res: Response) => {
    const data: CompteBancaireInterface = CompteBancaireFactory2.createCompteBancaire(req.body.type_de_compte, req.body.banque_id, req.body.user_id, req.body.solde)
    return data;
  }
}

export class CompteBancaireFactory2 {

  static createCompteBancaire(type_de_compte: string, banque_id: number, user_id: number, solde:number) {
    const newCompteBancaire = CompteBancaireClass.getInstance()
    console.log(newCompteBancaire);
    newCompteBancaire.setType_de_compte(type_de_compte)
    newCompteBancaire.setBanque_id(banque_id)
    newCompteBancaire.setUser_id(user_id)
    newCompteBancaire.setSolde(solde)
    return newCompteBancaire;
  }
}

