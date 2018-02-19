import * as http from 'http';

export class LoginService {
    constructor() {
    }
    public login(data: any, cb): void {
        let options = {
            host: '52.233.158.172',
            path: '/change/api/en/account/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(JSON.stringify(data))
            }
        };
        let res="";
        let check: boolean;
        let request = new http.ClientRequest(options);
        request.end(JSON.stringify(data));
        request.on('response', function (response) {
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                res += chunk;
            });
            response.on('end', function () {
                cb(JSON.parse(res));
            });
        });

    }

}

export default new LoginService();
