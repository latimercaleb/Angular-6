import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // Sort by sever.name, if sorting is activated
  transform(value: any, ...args: any[]): any {
    return null;
  }

}
