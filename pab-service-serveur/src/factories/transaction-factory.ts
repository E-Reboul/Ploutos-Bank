import { Transaction } from "../interfaces/transaction-interface";
import { TransactionClass } from "../Entities/transaction-entity"
import { Request, Response } from "express"

export class TransactionFactory {
  static exportTransaction = (req: Request, res: Response) => {
    const data: Transaction = TransactionFactory2.createTransaction(req.body.date_transaction,req.body.somme_transaction,req.body.paiement_id,req.body.etablissement_id,req.body.depenses_revenus_id, req.body.compte_bancaire_id, req.body.compte_bancaire_banque_id, req.body.compte_bancaire_user_id)
    return data;
  }
}

export class TransactionFactory2 {

  static createTransaction(date_transaction:Date,somme_transaction:number,paiement_id:number,etablissement_id:number,depenses_revenus_id:number, compte_bancaire_id:number, compte_bancaire_banque_id:number, compte_bancaire_user_id:number) {
    const newTransaction = TransactionClass.getInstance()
    newTransaction.setDate_transaction(date_transaction)
    newTransaction.setSomme_transaction(somme_transaction)
    newTransaction.setPaiement_id(paiement_id);
    newTransaction.setEtablissement_id(etablissement_id);
    newTransaction.setDepenses_revenus_id(depenses_revenus_id);
    newTransaction.setCompte_bancaire_id(compte_bancaire_id);
    newTransaction.setCompte_bancaire_banque_id(compte_bancaire_banque_id);
    newTransaction.setCompte_bancaire_user_id(compte_bancaire_user_id);
    return newTransaction;
  }
}

