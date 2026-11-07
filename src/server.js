//Forzando a usar los servidores DNS de google por problemas en local
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


import app from "./app.js";
import config from "./config/env.config.js"
import {connectDB} from "./config/database.config.js"

const PORT = config.port;
const NODE_ENV = config.nodeEnv;

const startServer = async() => {
    await connectDB()
}

app.listen(PORT, () => {
    console.log(`Servidor HTTP en http://localhost:${PORT} (${NODE_ENV})`);
});

startServer()
