import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'automationDegree',
  pure: false
})
export class AutomationDegreePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (+value === 3) {
      return 'verifiying';
    }
    if (+value === 2) {
      return 'indirect';
    }
    if (+value === 1) {
      return 'supporting';
    }
    if (+value === 0) {
      return 'not verifying';
    }
    return null;
  }

}
