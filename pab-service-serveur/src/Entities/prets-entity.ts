export class pretsEntity {

    private static instance: pretsEntity;

    public taux: number = 0;

    public montant: number = 0;

    public contrat: string = "";

    public nom_du_pret: string = "";

    public mensualite_restante: Date = new Date();

    public compte_bancaire_id: number = 0;

    public compte_bancaire_banque_id: number = 0;


    private constructor() {
        console.log("constructor ok");

    };

    public static getInstance(): pretsEntity {
        if (!pretsEntity.instance) {
            pretsEntity.instance = new pretsEntity();

        };
        return pretsEntity.instance;

    };

//SETTER
    setTaux(newTaux: number) {
        this.taux = newTaux;

    };

    setMontant(newMontant: number) {
        this.montant = newMontant;

    };

    setContrat(newContrat: string) {
        this.contrat = newContrat;

    };

    setNom_pret(newNom_du_pret: string) {
        this.nom_du_pret = newNom_du_pret;

    };

    setMensualite_restante(newMensualite_restante: Date) {
        this.mensualite_restante = newMensualite_restante;

    };

    setCompte_bancaire_id(newCompte_bancaire_id: number) {
        this.compte_bancaire_id = newCompte_bancaire_id;

    };

    setBanque_id_compte(newCompte_bancaire_banque_id: number) {
        this.compte_bancaire_banque_id = newCompte_bancaire_banque_id;

    };

//GETTER

    getTaux() {
        return this.taux;

    };

    getMontant() {
        return this.montant;

    };

    getContrat() {
        return this.contrat;

    };

    getNom_pret() {
        return this.nom_du_pret;

    };

    getMensualite_restante() {
        return this.mensualite_restante;

    };

    getCompte_bancaire_id() {
        return this.compte_bancaire_id;

    };

    getBanque_id_compte() {
        return this.compte_bancaire_banque_id;

    };

};