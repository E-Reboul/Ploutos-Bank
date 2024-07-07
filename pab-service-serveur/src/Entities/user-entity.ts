
export class UserClass {
    private static instance: UserClass;
    nom: string = '';
    prenom: string = '';
    email: string = '';
    numero_telephone: number = 0;
    etat: string = '';
    role: string = '';
    password: string = '';
    identifiant: string = '';

    private constructor() {
        console.log("Constructer")
    }

    public static getInstance(): UserClass {
        if (!UserClass.instance) {
            UserClass.instance = new UserClass();
        }
        return UserClass.instance;
    }

    setIdentifiant(newIdentifiant: string) {
        this.identifiant = newIdentifiant
    }

    getIdentifiant(): string {
        return this.identifiant;
    }

    setPassword(newPassword: string) {
        this.password = newPassword;
    }

    getPassword(): string {
        return this.password;
    }
    setNom(newNom: string) {
        this.nom = newNom
    }

    getNom(): string {
        return this.nom;
    }

    setPrenom(newPrenom: string) {
        this.prenom = newPrenom;
    }

    getPrenom(): string {
        return this.prenom;
    }
    setEmail(newEmail: string) {
        this.email = newEmail;
    }

    getEmail(): string {
        return this.email;
    }
    setNumero(newNumero: number) {
        this.numero_telephone = newNumero;
    }

    getNumero(): number {
        return this.numero_telephone;
    }
    setRole() {
        this.role = "CLIENT";
    }

    getRole(): string {
        return this.role;
    }
    setEtat() {
        this.etat = "ACTIF";
    }

    getEtat(): string {
        return this.etat;
    }
}

