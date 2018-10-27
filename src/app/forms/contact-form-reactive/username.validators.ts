import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {

    static connotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { connotContainSpace: true };
        }

        return null;
    }

    static shouldBeQnique(control: AbstractControl): Promise<ValidationErrors | null> {
        /**
         * @resolve && reject are functions
         */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh')
                    return resolve({ shouldBeQnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
}