import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddAddress: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddAddress(): void {
    this.showAddAddress = !this.showAddAddress;
    this.subject.next(this.showAddAddress)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
