import { Common } from 'src/util/common.util';
import { LoggerService } from 'nest-logger';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLoggerService {

    constructor(
        private logger: LoggerService
    ) { }

    writeRequestLog(req: any, method: any, id: any, request: any) {

        let str = "";
        if (Common.isExist(req.url) && Common.isExist(req.user)) {
            str = "Request:  "  + JSON.stringify(req.url) + " | "
                                + "userId: " + JSON.stringify(req.user.id) + " | ";
        } else {
            str = "Request:  ";
        }

        str +=  JSON.stringify(method) + " | "
                            + "Id: " + JSON.stringify(id) + " | "
                            + JSON.stringify(request);

        this.logger.info(str);
    }

    writeResponseLog(...params) {
        
        let result = "";

        if (Common.isExist(params[0].url) && Common.isExist(params[0].user)) {
            result = "Response: " + JSON.stringify(params[0].url) + " | "
                     + "userId: " + JSON.stringify(params[0].user.id);
        } else {
            result = "Response: " + JSON.stringify(params[0]);
        }
        
        for (let i=1; i<params.length; i++) {
            result += " | " + params[i];
        }
        this.logger.info(result);
    }
}
