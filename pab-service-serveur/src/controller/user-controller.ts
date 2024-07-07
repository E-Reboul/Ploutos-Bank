// Import de Bcrypt
import bcrypt from "bcrypt"
//Import des fonctions du model
import { getAllUsers, getUserById, createUser, updateUser, getUserByName, deleteUser } from "../model/user-model"
//Import de express
import { Request, Response } from "express"
//Import de la fonction Sign de JsonWebToken
import { sign } from "jsonwebtoken";
// Import des interface
import { User, UserLogin, UserComplete } from "../interfaces/user-interface";
//Import de dotenv
import dotenv from "dotenv";
import { UserFactory } from "../factories/user-factory";
dotenv.config();


//CRUD

export const getAllUserC = async (req: Request, res: Response) => {
    try {
        const allUserdb = await getAllUsers();
        res.status(200).json(allUserdb);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les Utilisateurs" });
    }
};

export const getUserByIdC = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        const Userdb = await getUserById(id);
        res.status(200).json(Userdb);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const createUserC = async (req: Request, res: Response) => {
    try {
        const data: User = UserFactory.exportUser(req, res);
        await bcrypt.hash(data.password, 10).then(passwordHashed => {
            data.password = passwordHashed;
            createUser(data);
            res.status(201).json({ message: "User créé avec succès" });
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const updateUserC = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const data: User = UserFactory.exportUser(req, res);
        await bcrypt.hash(data.password, 10).then(passwordHashed => {
            data.password = passwordHashed;
            updateUser(id, data);
            res.status(200).json({ message: "User mis à jour avec succès" });
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteUserC = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)
        await deleteUser(id);
        res.status(204).json({ message: "User supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//FIN CRUD
//LOGIN 
export const loginUser = async (req: Request, res: Response) => {
    try {
        const user: UserLogin = { "identifiant": req.body.identifiant, "password": req.body.password };
        // Du utilisé as UserComplete sinon ca ne fonctionnait pas ?!!
        const userDb: UserComplete = await getUserByName(user.identifiant) as UserComplete;

        if (userDb !== undefined) {
            bcrypt.compare(user.password, userDb.password).then(isOk => {
                if (isOk) {
                    if (process.env.JWT_KEY !== undefined) {
                        
                        const token: string = sign({ "userId": userDb.id }, process.env.JWT_KEY);
                        res.status(200).json({ "token": token });
                    } else {
                        res.status(500).json({ message: "JWT n'existe pas" });
                    }
                } else {
                    res.status(503).json({ message: "Le mot de passe n'est pas valide" });
                }
            }).catch(error => {
                res.status(500).json({ message: "Erreur lors de la vérification du mot de passe" });
            });
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur est survenue", error: error });
    }
};
//FIN LOGIN