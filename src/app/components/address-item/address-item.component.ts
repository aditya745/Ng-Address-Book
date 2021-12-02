import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Address} from '../../Address';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
  editMode: boolean = false;
  @Input() address!: Address;
  @Output() onDeleteAddress: EventEmitter<Address> = new EventEmitter();
  @Output() onEditAddress: EventEmitter<Address> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
    
  }
  onDelete(address: Address) {
    this.onDeleteAddress.emit(address);
  }
  onEdit(address: Address) {
    console.log(address)
    this.onEditAddress.emit(address);
  }

}
