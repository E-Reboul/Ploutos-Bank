export class BanqueClass {
    private static instance: BanqueClass;
    public nom_banque: string = "";
    public numero_guichet: number =0;
    public numero_telephone: number=0;
    public email: string = "";
    public adresse: string = "";

    private constructor() {
        console.log("constructer")
    }

    public static getInstance(): BanqueClass {
        if (!BanqueClass.instance) {
            BanqueClass.instance = new BanqueClass();
        }
        return BanqueClass.instance;
    }

    setNomBanque(newNomBanque: string) {
        this.nom_banque = newNomBanque.trim();
    }

    getNomBanque(): string {
        return this.nom_banque;
    }

    setNumeroGuichet(newNumeroGuichet: number) {
        this.numero_guichet = newNumeroGuichet.valueOf();
    }

    getNumeroGuichet(): number {
        return this.numero_guichet;
    }

    setNumeroTelephone(newNumeroTelephone: number) {
        this.numero_telephone = newNumeroTelephone.valueOf();
    }

    getNumeroTelephone(): number {
        return this.numero_telephone;
    }

    setEmail(newEmail: string) {
        this.email = newEmail.trim();
    }

    getEmail(): string {
        return this.email;
    }

    setAdresse(newAdresse: string) {
        this.adresse = newAdresse.trim();
    }

    getAdresse(): string {
        return this.adresse;
    }


};