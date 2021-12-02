import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

   hour: number = 0;
   minute: number = 0;
   seconds: number = 0;
   totalSeconds: number = 0;
   

  constructor() { }

  ngOnInit(): void {
    window.onload = () => {
     let intervalId = null;
    
    
      const startTimer = () => {
        ++this.totalSeconds;
        this.hour = Math.floor(this.totalSeconds / 3600);
        this.minute = Math.floor((this.totalSeconds - this.hour * 3600) / 60);
        this.seconds = this.totalSeconds - (this.hour * 3600 + this.minute * 60);
      }
      intervalId = setInterval(startTimer, 1000);
    }
  }
}
