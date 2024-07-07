export class PaimentClass {
    private static instance: PaimentClass;
    public type_de_paiement: string = '';
    public carte_id: string = '';

    private constructor() {
        // console.log("constructeur")
    }

    public static getInstance(): PaimentClass {
        if (!PaimentClass.instance) {
            PaimentClass.instance = new PaimentClass();
        }
        return PaimentClass.instance;
    }

    setTypeDePaiement(newPaiement: string) {
        this.type_de_paiement = newPaiement
    }

    getTypeDePaiement(): string {
        return this.type_de_paiement
    }

    setCarteId(newPaiement: string) {
        this.carte_id = newPaiement
    }

    getCarteId(newPaiement: string) {
        this.carte_id = newPaiement
    }
}