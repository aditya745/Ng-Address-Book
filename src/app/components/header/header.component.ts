import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Address Book';
  showAddAddress: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAddress = value);
  }

  ngOnInit(): void {

  }
  toggleAddForm() {
    this.uiService.toggleAddAddress();
  }
  onSortAscending() {
    this.uiService.dataAscending();
  }
  onSortDescending() {
    this.uiService.dataDescending();
  }
}
