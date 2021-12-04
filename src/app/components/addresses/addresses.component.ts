import { Component, Input, OnInit } from '@angular/core';

import { AddressService } from '../../services/address.service';
import { Address } from '../../Address';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addresses: Address[] = [];
  dataAscendingSubscription!: Subscription;
  dataDescendingSubscription!: Subscription;

  constructor(private addressService: AddressService, private uiService: UiService) {
    this.dataAscendingSubscription = this.uiService.onDataAscending().subscribe(value => this.addresses = value);
    this.dataDescendingSubscription = this.uiService.onDataDescending().subscribe(value => this.addresses = value);
  }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(addresses => this.addresses = addresses);
  }
  
  deleteAddress(address: Address) {
    this.addressService.deleteAddress(address).subscribe(() => this.addresses = this.addresses.filter(a => a.id !== address.id));
  }

  addAddress(address: Address) {
    this.addressService.addAddress(address).subscribe(address => this.addresses.push(address));
  }

  editAddress(address: Address) {
    this.addressService.updateAddress(address).subscribe();
  }
  sortAscending() {
    this.addressService.sortAscending().subscribe(addresses => this.addresses = addresses);
  }

  sortDescending() {
    this.addressService.sortDescending().subscribe(addresses => this.addresses = addresses);
  }
}
