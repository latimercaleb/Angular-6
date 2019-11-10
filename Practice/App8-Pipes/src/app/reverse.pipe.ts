import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  // Reverse instance type
  transform(initialInstance: any): any {
    let reversedInstance = [];
    initialInstance.split('').forEach(
      (letter) => {
        reversedInstance.unshift(letter);
      }
    );
    return reversedInstance.join('');
  }

}
