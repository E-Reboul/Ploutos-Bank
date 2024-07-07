export class CardBankClass {
    private static instance: CardBankClass;
    public nom_carte: string = "";
    public type_carte: string = "";
    public titulaires: string = "";
    public date_expiration: Date = new Date;
    public contrat: string = "";
    compte_bancaire_id: number = 0;
    compte_bancaire_banque_id: number = 0;
    compte_bancaire_user_id: number = 0;

    private constructor() {
        console.log("Constructeur");
    };

    public static getInstance(): CardBankClass {
        if (!CardBankClass.instance) {
            CardBankClass.instance = new CardBankClass();
        };
        return CardBankClass.instance;
    };

    setNomCarte(newNomCarte: string) {
        this.nom_carte = newNomCarte.trim()
    };

    setTypeCarte(newTypeCarte: string) {
        this.type_carte = newTypeCarte.trim()
    };

    setTitulaires(newTitulaires: string) {
        this.titulaires = newTitulaires.trim()
    };

    setDateExpiration(newDateExpiration: Date) {
        this.date_expiration = newDateExpiration;
    };

    setContrat(newContrat: string) {
        this.contrat = newContrat.trim()
    };

    getNomCarte(): string {
        return this.nom_carte;
    };

    getTypeCarte(): string {
        return this.type_carte;
    };

    getTitulaires(): string {
        return this.titulaires;
    };

    getDateExpiration(): Date {
        return this.date_expiration;
    };

    getContrat(): string {
        return this.contrat;
    };
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

};