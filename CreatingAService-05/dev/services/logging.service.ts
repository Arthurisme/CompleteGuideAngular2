import {Injectable} from "angular2/core";


@Injectable()
export class LoggingService {
    private _lastMessage = '';

    log(message:string){
        console.log('Current Message: ' + message + ', Last Meassage: ' + this._lastMessage);
        this._lastMessage = message;
    }
}
