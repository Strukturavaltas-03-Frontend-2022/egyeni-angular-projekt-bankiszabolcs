import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe<T extends{[key:string]:any}> implements PipeTransform {

  transform(value: T[], phrase:string, key:string): T[] {
    if(!Array.isArray(value) || !phrase || !key){
      return value
     }

     phrase=phrase.toLowerCase()

     return value.filter(movie=> (''+movie[key]).toLowerCase().includes(phrase) )

    }

}
