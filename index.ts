import Server  from "./classes/server";
import { SERVE_PORT } from "./global/environment";
import  router  from "./routes/router";
import  bodyParser  from 'body-parser';
import cors  from 'cors';


const server = new Server();

/// bodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json())

// cors  - puedan consumir lo servicios  sin que esten en el mismo dominio
server.app.use( cors({origin:true, credentials:true}) )

/// rutas de servicios
server.app.use('/', router);

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${ SERVE_PORT}`);
});