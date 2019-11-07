import {PipeTransform, Pipe} from '@angular/core';
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(val: any, limit: number){
        return val.length > limit ? val.substr(0,10) + ' ...' : val;
    }
}