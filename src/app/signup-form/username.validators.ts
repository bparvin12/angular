import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    //in order to access this validator form the outside without having to create an instance of this user's validator class
    //we decorate this with static
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true }
        // return { minlength: {
        //     requiredLength: 10, 
        //     actualLength: control.value.length
        // }}
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            //normall conect to server
            //right now just hard code in
            //calling to the server is an asynchronous operation. so we need to setTimeout
            setTimeout(() => {
                if (control.value === 'mosh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}