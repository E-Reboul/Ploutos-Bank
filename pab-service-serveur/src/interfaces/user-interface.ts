export interface User {
    nom: string;
    prenom: string;
    email: string;
    numero_telephone: number;
    etat: string;
    role: string;
    password: string;
    identifiant: string;
}
export interface UserLogin {
    identifiant: string;
    password: string;
}
export interface UserComplete {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    numero_telephone: number;
    etat: string;
    role: string;
    password: string;
    identifiant: string;
}