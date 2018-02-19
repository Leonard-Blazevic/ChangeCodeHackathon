import * as express from 'express';
import registrationRouter from './routes/registrationRouter';
import loginRouter from './routes/loginRouter';
import infoRouter from './routes/infoRouter';
import * as ejs from 'ejs';
import * as bodyParser from 'body-parser';
export class App {
    public app;

    constructor() {
        this.app = express();
        this.app.set('view engine', 'ejs');
        this.app.set('views', 'src/views');
        this.app.use(express.static('public'));
        this.app.use( bodyParser.json() );
        this.mountRoutes();
    }

    private mountRoutes(): void {
        this.app.use(registrationRouter.router);
        this.app.use(loginRouter.router);
        this.app.use(infoRouter.router);
    }
}

export default new App().app;
