import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {

    /**
     * this need to be registed in the app-module.
     * this the Globle error handler
     * in feture we can show error on tosts notification
     * print on server log file
     * @param error 
     */
    handleError(error:Response) {
        // alert('An unexcepted error occured.!');
        console.log('GLOBLE ERROR : ================== \n' , error.statusText);
    }

}