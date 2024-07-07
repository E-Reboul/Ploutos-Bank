import cors from "cors";
import express, { Request, Response, Application } from "express"
import { ApiResponse } from "./interfaces/api-interface";
import connection from "./config/database";
import dotenv from "dotenv"

const app: Application = express();
const PORT: number | string = process.env.PORT || 3000;
const usersRoutes = require('./routes/user-routes');
const CompteBancaires= require('./routes/compte-bancaire-routes')
const PretBancaires= require('./routes/prets-routes')
const moyenPaiement= require('./routes/paiement-routes')
const transactionRoutes= require('./routes/transaction-routes')
const banqueRoutes= require('./routes/banque-routes')
const cardRoutes = require("./routes/cb-routes");
const DepRevRoutes = require('./routes/dep-rev-routes');
const EtabRoutes = require('./routes/etablissement-routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

connection.connect((error) => {
    if (error) throw error;
    console.log("Vous êtes bien connecté à la base de donnée");
});

app.use("/users", usersRoutes);
app.use("/comptes", CompteBancaires);
app.use("/pret", PretBancaires);
app.use("/paiments", moyenPaiement);
app.use("/transaction", transactionRoutes);
app.use("/banque", banqueRoutes);
app.use("/card", cardRoutes);
app.use("/dev", DepRevRoutes);
app.use("/etab", EtabRoutes);


app.get("/", (req: Request, res: Response<ApiResponse>, next) => {
    const response: ApiResponse = {
        message: "votre API marche avec Node JS et Type Script",
        timestamp: new Date()
    }
    res.status(200).json(response)
})
 
app.listen(PORT, () => {
    console.log(`L'Api tourne sur le PORT ${PORT}`)
})