import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {
  private apiUrl = 'https://localhost:7103/api/shopdata';  

  constructor(private http: HttpClient) {}

  // Fetch data based on date range
  getShopData(startDate: string, endDate: string): Observable<any[]> {
    const url = `${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<any[]>(url);
  }
}