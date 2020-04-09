import  express  from 'express';
import { SERVE_PORT } from '../global/environment';
 
export default class Server {

    public app: express.Application ;
    public port:number;

    constructor(){
        this.app = express();
        this.port  = SERVE_PORT;
    }  

    start( callback : Function){
       this.app.listen(this.port, callback()) ;
    }

}