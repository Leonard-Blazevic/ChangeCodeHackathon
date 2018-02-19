import { Request, Response } from 'express';
import registerService from '../services/registerService';
export class RegistrationController {
    getRegistration = function (req: Request, res: Response) {
        res.render('registration');
    };
    postRegistration = function (req, res: Response) {
        registerService.register(req.body, (response) => {
          res.send(response);           
        })
    };
    root=function (req, res: Response) {
        res.redirect('./registration');
    }
}

const registrationController: RegistrationController = new RegistrationController();

export default registrationController;
