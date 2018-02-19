import { Router, Request, Response, NextFunction } from 'express';
import infoController from '../controllers/infoController';

class InfoRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/info', infoController.getInfo);
        this.router.get('/info/:token/:id',infoController.getInfoData);
    }
}
const loginRouter: InfoRouter = new InfoRouter();

export default loginRouter;
