import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Address } from '../Address';
import { AddressService } from './address.service';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddAddress: boolean = false;
  private subject = new Subject<any>();

  ascendingSortAddresses: Address[] = [];
  dataAscendingSubject = new Subject<any>();

  descendingSortAddresses: Address[] = [];
  dataDescendingSubject = new Subject<any>();

  constructor(private addressService: AddressService) { }

  toggleAddAddress(): void {
    this.showAddAddress = !this.showAddAddress;
    this.subject.next(this.showAddAddress)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  dataAscending(): void {
    this.addressService.sortAscending().subscribe(addresses => {
      this.ascendingSortAddresses = addresses;
      this.dataAscendingSubject.next(this.ascendingSortAddresses)
    });
  }

  onDataAscending(): Observable<Address[]> {
    return this.dataAscendingSubject.asObservable();
  }

  dataDescending(): void {
    this.addressService.sortDescending().subscribe(addresses => {
      this.descendingSortAddresses = addresses;
      this.dataDescendingSubject.next(this.descendingSortAddresses)
    });
  }

  onDataDescending(): Observable<Address[]> {
    return this.dataDescendingSubject.asObservable();
  }

}
