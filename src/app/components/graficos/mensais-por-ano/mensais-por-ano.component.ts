import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { GastosCharts } from 'src/app/core/models/gastos-por-dia.model';

@Component({
  selector: 'app-mensais-por-ano',
  templateUrl: './mensais-por-ano.component.html',
  styleUrls: ['./mensais-por-ano.component.scss']
})
export class MensaisPorAnoComponent implements AfterViewInit {

  @Input()
  public gastosPorMes: GastosCharts = new GastosCharts();


  ngAfterViewInit(){
    console.log(this.gastosPorMes)
    this.valoresMensaisChart();
  }

  

  valoresMensaisChart() {

    var myChart = new Chart("valoresDiariosPorMesChart1", {
      type: 'bar',
      data: {
        labels: this.gastosPorMes.valoresDiariosLabel,
        datasets: [{
          label: 'Valores Mensais (Últimos 12 meses)',
          data: this.gastosPorMes.valoresDiariosData,
          backgroundColor: this.gastosPorMes.valoresDiariosbackgroundColor,
          borderColor: this.gastosPorMes.valoresDiariosborderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


}
