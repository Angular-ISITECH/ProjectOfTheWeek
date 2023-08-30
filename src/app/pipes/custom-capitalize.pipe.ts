import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomCapitalize'
})
export class CustomCapitalize implements PipeTransform {
  transform(value: String): string {
    //each word in the string is capitalized
    return value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}
