import { Etablissement } from "../interfaces/etablissement-interface";
import { EtablissementClass } from "../Entities/etablissement-entity";
import { Request, Response } from "express"
export class EtabFactory {
    static exportEtab = (req: Request, res: Response) => {
        const data: Etablissement = EtabFactory2.createEtab(req.body.nom_etablissement, req.body.type_etablissement)
        return data;
    }
}

export class EtabFactory2 {

    static createEtab(nom_etablissement: string, type_etablissement: string) {
        const newEtab = EtablissementClass.getInstance()
        newEtab.setNomEtab(nom_etablissement)
        newEtab.setTypeEtab(type_etablissement)
        return newEtab;
    }
}