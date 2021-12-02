import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Address } from '../../Address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  @Output() onAddAddress: EventEmitter<Address> = new EventEmitter();

  name!: string;
  email!: string;
  address!: string;
  showAddAddress!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAddress = value)
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.name) {
      alert('Please add name');
      return;
    }

    const newAddress = {
      name: this.name,
      email: this.email,
      address: this.address
    }

    this.onAddAddress.emit(newAddress);

    this.name = '';
    this.email = '';
    this.address = '';

  }

}
