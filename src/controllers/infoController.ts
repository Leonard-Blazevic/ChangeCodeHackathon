import { Request, Response } from 'express';
import infoService from '../services/infoService';
export class InfoController {
    getInfoData = function (req: Request, res: Response) {
        infoService.getInfo({token:req.params.token,id:req.params.id}, (response) => {
            res.send(response);
        });
    };
    getInfo = function (req, res: Response) {
        res.render('displayInfo');
    };
}

const infoController: InfoController = new InfoController();

export default infoController;
