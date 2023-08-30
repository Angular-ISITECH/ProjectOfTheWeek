import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomDateText'
})
export class CustomDateText implements PipeTransform {
  transform(value: Date): string {
    //transform the date into a string with the format "12 Mars 2018"
    const month = value.getMonth();
    const day = value.getDate();
    const year = value.getFullYear();
    const listMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout","Septembre", "Octobre", "Novembre", "Décembre"];
    const monthText = listMonth[month];

    return day + " " + monthText + " " + year;
  }
}
