import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Observable, Subscription } from 'rxjs';
import { AddressService } from '../../services/address.service';
import { Address } from 'src/app/Address';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  title:string = 'Address Book';
  showAddAddress: boolean = false;
  subscription!: Subscription;
  addresses$!: Observable<Address[]>;
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAddress = value)
  }

  ngOnInit(): void {
    
  }

  toggleAddForm() {
    this.uiService.toggleAddAddress();
  }
}
