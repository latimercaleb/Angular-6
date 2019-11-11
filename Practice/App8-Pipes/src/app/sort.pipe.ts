import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // Sort by sever.name, if sorting is activated
  transform(collection: any, flag:boolean): any {
    if(flag){
      let t = [];
      // Implement sorting method correctly
     collection.sort((first,next) => {
        if (first.name.localeCompare(next.name) <= 0 ){
          t.push(first);
        }else{
          t.push(next);
        }
      })
      console.log(t);
      return collection;
    }else{
      return collection;
    }
    
  }

}
