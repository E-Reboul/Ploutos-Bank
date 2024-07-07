import { User } from "../interfaces/user-interface";
import { UserClass } from "../Entities/user-entity";
import { Request, Response } from "express";

export class UserFactory {
  static exportUser = (req: Request, res: Response) => {
    const data: User = UserFactory2.createUser(req.body.nom, req.body.prenom, req.body.email, req.body.numero_telephone, req.body.etat, req.body.role, req.body.password, req.body.identifiant)
    return data;
  }
}

export class UserFactory2 {
  static createUser(nom: string, prenom: string, email: string, numero_telephone: number, etat: string, role: string, password: string, identifiant: string) {
    const newUser = UserClass.getInstance()
    newUser.setIdentifiant(identifiant)
    newUser.setEmail(email)
    newUser.setPassword(password)
    newUser.setNom(nom)
    newUser.setPrenom(prenom)
    newUser.setNumero(numero_telephone)
    newUser.setRole()
    newUser.setEtat()
    return newUser;
  }
}

