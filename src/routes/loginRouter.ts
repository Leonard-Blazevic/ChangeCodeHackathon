import { Router, Request, Response, NextFunction } from 'express';
import loginController from '../controllers/loginController';

class LoginRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/login', loginController.getLogin);
        this.router.post('/login',loginController.postLogin);
    }
}
const loginRouter: LoginRouter = new LoginRouter();

export default loginRouter;
