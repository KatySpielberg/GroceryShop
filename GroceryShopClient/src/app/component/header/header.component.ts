import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() startDate: string = '2021-06-01'; 
  @Input() endDate: string = '2021-12-31';  
  @Input() isFilterApplied: boolean = false;
  @Output() filterApplied = new EventEmitter<{ startDate: string, endDate: string }>();

  applyFilter() {
    this.filterApplied.emit({ startDate: this.startDate, endDate: this.endDate });
  }
}