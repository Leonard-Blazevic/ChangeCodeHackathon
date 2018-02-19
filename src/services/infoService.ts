import * as http from 'http';

export class InfoService {
    constructor() {
    }
    public getInfo(data: any, cb): void {
        let options = {
            host: '52.233.158.172',
            path: '/change/api/hr/team/details/'+data.id,
            method: 'GET',
            headers: {
                'X-Authorization': 'TOKEN '+data.token
            }
        };
        let res="";
        let check: boolean;
        let request = new http.ClientRequest(options);
        request.end();
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

export default new InfoService();
