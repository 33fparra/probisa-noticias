import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IpaRow } from 'src/app/code/modules/data/interfaces/ipa-row.interface';
import { IpaRepository } from 'src/app/code/modules/data/repositories/ipa.repository';
// import { UsersRepository } from 'src/app/code/modules/data/repositories/users.repository';
import { LoadingCounterService } from 'src/app/code/services/loading-counter.service';

@Component({
  selector: 'app-indice-precio-asfalto',
  templateUrl: './indice-precio-asfalto.component.html',
  styleUrls: ['./indice-precio-asfalto.component.scss']
})
export class IndicePrecioAsfaltoComponent implements OnInit {

  rows: IpaRow[] = [];
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: this.rows.map((row: any) => row.index),
        label: 'Indice de Precios',
        fill: true,
        tension: 0,
        pointRadius: 8,
        pointHitRadius: 15,
        pointHoverRadius: 12,
        borderColor: '#2a4284',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#2a4284',
        pointHoverBackgroundColor: '#4d6ecbF1',
        borderJoinStyle: 'miter',
        spanGaps: false,
        showLine: true
      }
    ],

  };
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true,
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  };
  public lineChartLegend = true;

  constructor(
    private repository: IpaRepository,
    // private userRepo: UsersRepository,
    private loadingService: LoadingCounterService
  ) { }

  @ViewChild(BaseChartDirective)
  chart!: BaseChartDirective;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loadingService.setLoading();
    this.repository.getAll().subscribe({
      next: (data: any) => {
        this.rows = data;
        console.log('data', data);
        this.lineChartData.datasets[0].data = this.rows.map((row: any) => row.index);
        this.lineChartData.labels = this.rows.map((row: any) => this.getMonth(row.month));
        this.lineChartOptions = {
          responsive: true,
          maintainAspectRatio: true,
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        };
        this.chart.ngOnChanges({});
        this.loadingService.setNoLoading();
      }
    });

  }
  getMonth(month: string) {
    return this.months[parseInt(month, 10) - 1];
  }

}
