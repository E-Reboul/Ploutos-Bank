export interface Transaction {
    date_transaction: Date;
    somme_transaction: number;
    paiement_id: number;
    etablissement_id: number;
    depenses_revenus_id: number;
    compte_bancaire_id:number;
    compte_bancaire_banque_id:number;
    compte_bancaire_user_id:number;
}