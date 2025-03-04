import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() isFilterApplied: boolean = false; // Receive filter status

  chartLabels: string[] = [];
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    elements: {
      line: { tension: 0.4 }
    },
    plugins: {
      legend: { display: true, position: 'top' }
    }
  };

  ngOnChanges() {
    console.log("CHART LOG - New data received:", this.data);
    this.updateChartData();
  }

  updateChartData() {
    if (!this.data || this.data.length === 0) {
      console.warn("CHART LOG - No data available.");
      this.chartLabels = [];
      this.chartData = { labels: [], datasets: [] };
      return;
    }

    this.chartLabels = this.data.map(d => new Date(d.date).toLocaleDateString());

    this.chartData = {
      labels: this.chartLabels,
      datasets: [
        {
          data: this.data.map(d => d.income),
          label: 'Income',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 4,
          type: 'line'
        },
        {
          data: this.data.map(d => d.outcome),
          label: 'Outcome',
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 4,
          type: 'line'
        },
        {
          data: this.data.map(d => d.revenue),
          label: 'Revenue',
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 4,
          type: 'line'
        }
      ]
    };

    console.log("CHART LOG - Final Chart Data:", this.chartData);
  }
}