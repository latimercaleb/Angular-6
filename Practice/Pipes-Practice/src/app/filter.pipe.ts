import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, inspectionProperty: string): any {
    
    if(value.length === 0 || filterString === ''){
      return value;
    }else{
      let resultSet = [];
      for(let status of value){ // for of vs for vs for in vs foreach, read this later     
        if (status[inspectionProperty] === filterString){
          resultSet.push(status);
        }
      }
      return resultSet;
    }
  }

}
