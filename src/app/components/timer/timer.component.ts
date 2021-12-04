import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

   hour: any = 0;
   minute: any = 0;
   seconds: any = 0;
   totalSeconds: any = 0;
   

  constructor() { }

  ngOnInit(): void {
    window.onload = () => {
     let intervalId = null;
    
    
      const startTimer = () => {
        ++this.totalSeconds;
        let hoursResult = Math.floor(this.totalSeconds / 3600);
        let minutesResult = Math.floor((this.totalSeconds - this.hour * 3600) / 60);
        let secondsResult = this.totalSeconds - (this.hour * 3600 + this.minute * 60); 
        
        this.hour = hoursResult < 10 ? '0' + hoursResult : hoursResult;
        this.minute = minutesResult < 10 ? '0' + minutesResult : minutesResult;
        this.seconds = secondsResult < 10 ? '0' + secondsResult : secondsResult;
      }
      intervalId = setInterval(startTimer, 1000);
    }
  }
}
