import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{
  @Output() intervalFired = new EventEmitter<number>();
  ref: ReturnType<typeof setInterval>;
  interval = 0;
 
  ngOnInit(){
  }

  onGameStarted(){
    this.ref = setInterval(() => {
      console.log(this.interval);
      this.intervalFired.emit(this.interval);
      this.interval++;
    }, 1000);  
  }

  onGameStopped(){
    clearInterval(this.ref);
  }
}
