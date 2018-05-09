import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'automationDegreeIcon',
  pure: false
})
export class AutomationDegreeIconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (+value === 3) {
      return 'done_all';
    }
    if (+value === 2) {
      return 'swap_horiz';
    }
    if (+value === 1) {
      return 'panorama_fish_eye';
    }
    if (+value === 0) {
      return '';
    }
    return null;
  }

}
