import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const emails = ['test@test.com', 'test2@test.com', 'test3@test.com'];

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let userEmail = control.get('email');
    if (!emails.some((email) => email === userEmail?.value)) {
      return null;
    }
    let valErr = {
      DuplicateEmail: { email: userEmail?.value },
    };
    return valErr;
  };
}

export function PasswordMatched(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirmedpassword = control.get('confirmedpassword');
    if (
      !password ||
      !confirmedpassword ||
      !password.value ||
      !confirmedpassword.value
    ) {
      return null;
    }

    let valErr = {
      UnMatchedPass: { pass: password.value, confirm: confirmedpassword.value },
    };
    return password.value === confirmedpassword.value ? null : valErr;
  };
}
