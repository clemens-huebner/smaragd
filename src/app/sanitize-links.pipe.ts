import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeLinks'
})
export class SanitizeLinksPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const regexMeasure = new RegExp("\\\\ownref{M-(.+?)}","g");
    const regexWeakness = new RegExp("\\\\ownref{CWE-(.+?)}","g");
    return value.replace(regexMeasure, "M-$1").replace(regexWeakness, "CWE-$1");
  }

}
