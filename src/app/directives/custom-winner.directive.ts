import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomWinner]'
})
export class CustomWinnerDirective {
  constructor(private el: ElementRef) {
    //add class 'rounded-full bg-blue-700 text-white py-1 px-2' to the winner
    this.el.nativeElement.classList.add('rounded-full', 'bg-blue-700', 'text-white', 'py-1', 'px-2');
  }
}
