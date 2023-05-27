import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { GastosCharts } from 'src/app/core/models/gastos-por-dia.model';

@Component({
  selector: 'app-diarios-por-mes',
  templateUrl: './diarios-por-mes.component.html',
  styleUrls: ['./diarios-por-mes.component.scss']
})
export class DiariosPorMesComponent implements AfterViewInit {

  @Input()
  public gastosPorDia: GastosCharts = new GastosCharts();


  ngAfterViewInit(){
    console.log(this.gastosPorDia)
    this.valoresDiariosChart();
  }

  

  valoresDiariosChart() {

    var myChart = new Chart("valoresDiariosPorMesChart", {
      type: 'bar',
      data: {
        labels: this.gastosPorDia.valoresDiariosLabel,
        datasets: [{
          label: 'Valores Diários (Últimos 30 dias)',
          data: this.gastosPorDia.valoresDiariosData,
          backgroundColor: this.gastosPorDia.valoresDiariosbackgroundColor,
          borderColor: this.gastosPorDia.valoresDiariosborderColor,
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
