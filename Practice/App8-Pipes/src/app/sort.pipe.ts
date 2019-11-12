import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  // Sort by sever.name, if sorting is activated
  transform(collection: any, flag:boolean): any {
    if(flag){
      collection.sort((a,b)=>{
        return a.name > b.name ? 1 : -1;
      });
      return collection;
    }else{
      return collection;
    }
    
  }

}
