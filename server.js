import express from "express";

// Inicializacion
const app = express();

// Settings
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views','./views');
app.set("port",3000);






// Iniciar servidor 
app.listen(app.get("port"));
console.log("Server iniciado en puerto "+app.get("port"));