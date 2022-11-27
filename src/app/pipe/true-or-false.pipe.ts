import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueOrFalse'
})
export class TrueOrFalsePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Van' : 'Nincs';
  }

}
