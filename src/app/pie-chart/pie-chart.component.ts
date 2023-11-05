import { Component, Input } from '@angular/core';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  @Input() pieChartData:any;
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: 'User Balance Distribution (1st 10 Users)',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        name: 'User Balance',
        data: this.formatDataForPieChart(),
      } as Highcharts.SeriesPieOptions,
    ],
  };

  ngOnInit() {
    this.chartOptions.series[0].data = this.formatDataForPieChart();
  }

  private formatDataForPieChart() {
    if (!this.pieChartData || this.pieChartData.length === 0) {
      return [];
    }
    return this.pieChartData.map((item:any) => [
      item.label,
      item.value,
    ]);
  }
}
