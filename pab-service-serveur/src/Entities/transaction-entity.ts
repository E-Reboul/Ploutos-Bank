
export class TransactionClass {
    private static instance: TransactionClass;
    date_transaction: Date = new Date();
    somme_transaction: number = 0;
    paiement_id: number = 0;
    etablissement_id: number = 0;
    depenses_revenus_id: number = 0;
    compte_bancaire_id:number = 0;
    compte_bancaire_banque_id:number = 0;
    compte_bancaire_user_id:number = 0;

    private constructor() {
        console.log("Constructer")
    }

    public static getInstance(): TransactionClass {
        if (!TransactionClass.instance) {
            TransactionClass.instance = new TransactionClass();
        }
        return TransactionClass.instance;
    }

    setDate_transaction(newDate_transaction: Date) {
        this.date_transaction = newDate_transaction;
    }

    getDate_transaction(): Date {
        return this.date_transaction;
    }

    setSomme_transaction(newSomme_transaction: number) {
        this.somme_transaction = newSomme_transaction;
    }

    getSomme_transaction(): number {
        return this.somme_transaction;
    }
    setPaiement_id(newPaiement_id: number) {
        this.paiement_id = newPaiement_id;
    }

    getPaiement_id(): number {
        return this.paiement_id;
    }

    setEtablissement_id(newEtablissement_id: number) {
        this.etablissement_id = newEtablissement_id;
    }

    getEtablissement_id(): number {
        return this.etablissement_id;
    }
    setDepenses_revenus_id(newDepenses_revenus_id: number) {
        this.depenses_revenus_id = newDepenses_revenus_id;
    }

    getDepenses_revenus_id(): number {
        return this.depenses_revenus_id;
    }
    setCompte_bancaire_id(newCompte_bancaire_id: number) {
        this.compte_bancaire_id = newCompte_bancaire_id;
    }

    getCompte_bancaire_id(): number {
        return this.compte_bancaire_id;
    }
    setCompte_bancaire_banque_id(newCompte_bancaire_banque_id: number) {
        this.compte_bancaire_banque_id = newCompte_bancaire_banque_id;
    }

    getCompte_bancaire_banque_id(): number {
        return this.compte_bancaire_banque_id;
    }
    setCompte_bancaire_user_id(newCompte_bancaire_user_id: number) {
        this.compte_bancaire_user_id = newCompte_bancaire_user_id;
    }

    getCompte_bancaire_user_id(): number {
        return this.compte_bancaire_user_id;
    }
}

