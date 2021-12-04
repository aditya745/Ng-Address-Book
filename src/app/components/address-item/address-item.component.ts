import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Address} from '../../Address';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
  isEditMode: boolean = false;
  
  @Input() address!: Address;
  @Output() onDeleteAddress: EventEmitter<Address> = new EventEmitter();
  @Output() onEditAddress: EventEmitter<Address> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
    
  }

  textBtnConfig = {
    styles: {
      padding: '5px 20px',
      border: '1px solid grey',
      borderRadius: ' 5px',
      width: '80%'
    }
  };

  onDelete(address: Address) {
    this.onDeleteAddress.emit(address);
  }
  onEditClick() {
    this.isEditMode = true
  }
  onEdit(address: Address) {
    this.onEditAddress.emit(address)
    this.isEditMode = false
  }
}
