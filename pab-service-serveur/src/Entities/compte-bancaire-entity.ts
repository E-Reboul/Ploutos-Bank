
export class CompteBancaireClass {
    private static instance: CompteBancaireClass;
    type_de_compte: string = '';
    banque_id: number = 0;
    user_id: number = 0;
    solde: number = 0;

    private constructor() {
        console.log("Constructer")
    }

    public static getInstance(): CompteBancaireClass {
        if (!CompteBancaireClass.instance) {
            CompteBancaireClass.instance = new CompteBancaireClass();
        }
        return CompteBancaireClass.instance;
    }

    setType_de_compte(newType_de_compte: string) {
        this.type_de_compte = newType_de_compte;
    }

    getType_de_compte(): string {
        return this.type_de_compte;
    }

    setBanque_id(newBanque_id: number) {
        this.banque_id = newBanque_id;
    }

    getBanque_id(): number {
        return this.banque_id;
    }
    setUser_id(newUser_id: number) {
        this.user_id = newUser_id;
    }

    getUser_id(): number {
        return this.user_id;
    }
    setSolde(newSolde: number) {
        this.solde = newSolde;
    }

    getSolde(): number {
        return this.solde;
    }
}

