import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomDate'
})
export class CustomDate implements PipeTransform {
  transform(value: Date): string {
    const day = ('0' + value.getDate()).toString().slice(-2);
    const month = ('0' + (parseInt(String(value.getMonth())) + 1)).toString().slice(-2);
    const year = value.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
