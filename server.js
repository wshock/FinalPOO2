import express from "express";

// Inicializacion
const app = express();

// Settings
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views','./views');
app.set("port",3000);


import { getConnection } from "./database.js";

app.get("/", async (req, res) => {
    res.render('login');
})

app.post("/login", async (req,res) => {

    const { user, password } = req.body;

    const connection = await database.getConnection();
    const result = await connection.query("SELECT * FROM usuarios WHERE user = ? AND password = ?", [user, password]);

    if (result[0].length > 0) {
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    }

})









// Iniciar servidor 
app.listen(app.get("port"));
console.log("Server iniciado en puerto "+app.get("port"));