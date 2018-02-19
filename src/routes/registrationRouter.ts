import { Router, Request, Response, NextFunction } from 'express';
import registrationController from '../controllers/registrationController';

class RegistrationRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/registration', registrationController.getRegistration);
        this.router.post('/registration',registrationController.postRegistration);
        this.router.get('/',registrationController.root);
    }
}
const registrationRouter: RegistrationRouter = new RegistrationRouter();

export default registrationRouter;
