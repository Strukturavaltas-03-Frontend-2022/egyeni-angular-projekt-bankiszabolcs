import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends { [key:string]: any }> implements PipeTransform {


  transform(value: T[], sortMode:string): T[] {
    if (!Array.isArray(value) || !sortMode) {
      return value;
    }
    if(sortMode === 'nameAz') return value.sort((a, b) => a['title'].localeCompare(b['title']));
    if(sortMode === 'nameZa') return value.sort((a, b) => b['title'].localeCompare(a['title']));
    if(sortMode === 'year19')  return value.sort((a, b) => a['releaseYear'] - b['releaseYear']);
    if(sortMode === 'year91') return value.sort((a, b) => b['releaseYear'] - a['releaseYear']);

    return value;
  }
}
