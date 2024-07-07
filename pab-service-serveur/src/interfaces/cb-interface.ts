export interface CarteBancaire {
    nom_carte: string
    type_carte: string
    titulaires: string
    date_expiration: Date
    contrat: string
    compte_bancaire_id:number;
    compte_bancaire_banque_id:number;
    compte_bancaire_user_id:number;
}