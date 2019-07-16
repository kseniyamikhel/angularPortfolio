import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectDate'
})
export class ProjectDatePipe implements PipeTransform {
  months = [
    'Jan ',
    'Feb ',
    'Mar ',
    'Apr ',
    'May ',
    'Jun ',
    'Jul ',
    'Aug ',
    'Sep ',
    'Oct ',
    'Nov ',
    'Dec '
  ]
  transform(value: any, args?: any): any {
    const month = this.months[new Date(value).getMonth() - 1];
    const year = new Date(value).getFullYear();
    return month + year;
  }

}