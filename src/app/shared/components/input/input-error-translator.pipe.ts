import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'inputErrorTranslator'
})
export class InputErrorTranslatorPipe implements PipeTransform {

  transform(errors: any): unknown {
    const key = Object.keys(errors)[0];
    switch (key) {
      case 'required':
        return 'This field is required';
      case 'minlength':
        return `At least ${errors[key].requiredLength} characters are required.`;
      case 'maxlength':
        return `The maximum length must be ${errors[key].requiredLength} characters.`;
      case 'min':
        return `The number entered must be greater than ${errors[key].min}.`;
      case 'max':
        return `The number entered must be less than ${errors[key].max}.`;
      case 'email':
        return "The email entered is not valid.";
      default:
        return 'Invalid input';
    }
  }

}
