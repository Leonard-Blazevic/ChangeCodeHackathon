import { Request, Response } from 'express';
import loginService from '../services/loginService';
export class LoginController {
    getLogin = function (req: Request, res: Response) {
        res.render('login');
    };
    postLogin = function (req, res: Response) {
        loginService.login(req.body, (response) => {
          res.send(response);           
        })
    };
}

const loginController: LoginController = new LoginController();

export default loginController;
