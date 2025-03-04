import { Component } from '@angular/core';
import { ShopDataService } from './services/shop-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroceryShopClient';
  startDate: string = '2021-06-01';
  endDate: string = '2021-12-31';
  chartData: any[] = [];
  isFilterApplied: boolean = false; // Track if filter button was clicked

  constructor(private shopDataService: ShopDataService) {}

  updateDateRange(dates: { startDate: string, endDate: string }) {
    console.log("app-c called - updateDateRange()");
    this.startDate = dates.startDate;
    this.endDate = dates.endDate;
    
    this.fetchData();
  }

  fetchData(): void {
    console.log("app-c called - fetchData()");
    this.shopDataService.getShopData(this.startDate, this.endDate).subscribe({
      next: (data) => {
        console.log("Data from API:", data);
        this.chartData = data;
        this.isFilterApplied = true; // Update flag after receiving data
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        alert('Failed to load data!');
      }
    });
  }
}