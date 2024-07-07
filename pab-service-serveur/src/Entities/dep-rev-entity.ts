
export class DepRevClass {
    private static instance: DepRevClass;
    public type: string = '';


    private constructor() {
        console.log("Construit")
    }

    public static getInstance(): DepRevClass {
        if (!DepRevClass.instance) {
            DepRevClass.instance = new DepRevClass();
        }
        return DepRevClass.instance;
    }

    setType(type: string) {
        this.type = type.trim();
    }

    getType(): string {
        return this.type;
    }


}

