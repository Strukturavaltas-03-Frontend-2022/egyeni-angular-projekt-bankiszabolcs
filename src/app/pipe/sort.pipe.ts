import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends { [key:string]: any }> implements PipeTransform {


  transform(value: T[], start:number, end:number, sortMode:string): T[] {
    if (!Array.isArray(value) || !sortMode) {
      return value
    }
    if(sortMode === 'nameAz'){
      value = value.sort((a, b) => a['title'].localeCompare(b['title'])).slice(start,end)
      return value
    }
    if(sortMode === 'nameZa'){
      value = value.sort((a, b) => b['title'].localeCompare(a['title'])).slice(start,end)
      return value
    }
    if(sortMode === 'year19'){
     value = value.sort((a, b) => a['releaseYear'] - b['releaseYear']).slice(start,end)
      return value
    }
    if(sortMode === 'year91'){
      value = value.sort((a, b) => b['releaseYear'] - a['releaseYear']).slice(start,end)
      return value
    }

    return value
  }
}
