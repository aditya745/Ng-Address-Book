import { Component, OnInit } from '@angular/core';

import { AddressService } from '../../services/address.service';
import {Address} from '../../Address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addresses: Address[] = [];
  constructor(private addressService: AddressService) { }

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
    this.addressService.updateAddress(address).subscribe(() => this.addresses);
  }

}
