import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  storeNumber(getNumber: number) {
    if (getNumber % 2 === 0) {
      this.evenNumbers.push(getNumber);
    } else {
      this.oddNumbers.push(getNumber);
    }
  }
}
