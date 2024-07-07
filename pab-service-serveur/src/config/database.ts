//Import de mysql
import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ploutosbank"
});
// export simple devant la constante ne suffisait pas, ni module.export.
export default connection;