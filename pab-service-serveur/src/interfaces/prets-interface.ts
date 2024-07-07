export interface pret {
    taux: number;
    montant: number;
    contrat: string;
    nom_du_pret: string;
    mensualite_restante: Date;
    compte_bancaire_id: number;

};

export interface pretComplete {
    taux: number;
    montant: number;
    contrat: string;
    nom_du_pret: string;
    mensualite_restante: Date;
    compte_bancaire_id: number;
    compte_bancaire_banque_id: number;

}