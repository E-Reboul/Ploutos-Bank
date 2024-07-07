export class EtablissementClass {
    private static instance: EtablissementClass;
    public nom_etablissement: string = '';
    public type_etablissement: string = '';
 
    private constructor() {
        console.log("Constructer")
    }

    public static getInstance(): EtablissementClass {
        if (!EtablissementClass.instance) {
            EtablissementClass.instance = new EtablissementClass();
        }
        return EtablissementClass.instance;
    }

    setNomEtab(newNomEtab: string) {
        this.nom_etablissement = newNomEtab;
    }

    getNomEtab(): string {
        return this.nom_etablissement;
    }

    setTypeEtab(newTypeEtab: string) {
        this.type_etablissement = newTypeEtab;
    }

    getTypeEtab(): string {
        return this.type_etablissement;
    }
}