import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})
export class GameControlComponent {
  @Output('emitNum') number = new EventEmitter<number>();
  initNumber = 0;
  ref;

  startGame() {
    this.ref = setInterval(() => {
      this.number.emit(this.initNumber + 1);
      this.initNumber++;
    }, 1000);
  }

  endGame() {
    clearInterval(this.ref); 
  }
}
