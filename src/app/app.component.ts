import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Data Dashboard';
  apiUrl = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
  data: any[] = [];
  pieChartData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl)
      .subscribe((response: any) => {
        this.data = response;
        this.pieDataSort();
      });
  }

  pieDataSort() {
    const newArray = this.data.slice(0, 10).map((item) => {
      const label = `${item.first} ${item.last}`;
      const balance = parseFloat(item.balance.replace(/[$,]/g, ''));
      return { label, value: balance };
    });
    this.pieChartData = newArray;
  }
}
